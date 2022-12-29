import { Request, Response } from 'express';
import { UserService } from '../../services/user/userService';
import { UserModel } from '../../models/user/userModel';
import { CreateUseCase } from '../../usecases/user/createUserUseCase';
import { GetUserUseCase } from '../../usecases/user/getUserUseCase';
import { UpdateUseCase } from '../../usecases/user/updateUserUseCase';
import { DeleteUseCase } from '../../usecases/user/deleteUserUseCase';
import { GetByIdUseCase } from '../../usecases/user/getByIdUserUseCase';
import Redis from 'ioredis';


const redis = new Redis();
const model = new UserModel();
const service = new UserService(model);
const createClass = new CreateUseCase(service);
const getClass = new GetUserUseCase(service);
const getByIdClass = new GetByIdUseCase(service);
const updateClass = new UpdateUseCase(service);
const deleteClass = new DeleteUseCase(service);


export class UserController {

 
	async create(req: Request, res: Response): Promise<Response> {
		try {
			createClass.create(req.body);

			redis.del('users');
			
			return res.status(200).send({ message: 'User created' });
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	}

	async get(req: Request, res: Response): Promise<Response> {
		const cache = await redis.get('users');

		if(cache) {
			return res.status(200).send(JSON.parse(cache));
		}
		else{
			try {
				const users = await getClass.get();

				redis.set('users', JSON.stringify(users));
				redis.expire('users', 3600);

				return res.status(200).send(users);
			} catch (err) {
				return res.status(400).send({ error: err });
			}
		}
	}

	async getById(req: Request, res: Response): Promise<Response> {
		try {
			const user = await getByIdClass.getById(Number(req.params.id));

			return res.status(200).send(user);
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	}

	async update(req: Request, res: Response): Promise<Response> {
		try {
			const user = await updateClass.update(req.body, Number(req.params.id));

			redis.del('users');
			
			return res.status(200).send(user);
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	}

	async delete(req: Request, res: Response): Promise<Response> {
		try {
			const user = await deleteClass.delete(Number(req.params.id));

			redis.del('users');
			
			return res.status(200).send(user);
		} catch (err) {
			return res.status(400).send({ error: err });
		}
	}

}
