import { User } from '../../entities/userEntity';
import { UserModel } from '../../models/user/userModel';
import { UserServicePort } from '../../ports/services/user/userServicePort';

export class UserService implements UserServicePort {

	constructor(private model: UserModel) {}

	async create(user: User): Promise<User> {
		return await this.model.create(user);
	}

	async get(): Promise<User[]> {
		return await this.model.get();
	}

	async getById(id: number): Promise<User | null> {
		return await this.model.getById(id);
	}

	async update(user: User, id: number): Promise<User> {
		return await this.model.update(id, user);
	}

	async delete(id: number): Promise<User> {
		return await this.model.delete(id);
	}

}
