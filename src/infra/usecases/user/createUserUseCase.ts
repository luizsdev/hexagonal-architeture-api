import { User } from '../../entities/userEntity';
import { CreateUserUseCasePort } from '../../ports/usecases/user/createUserUseCasePort';
import { UserService } from '../../services/user/userService';

export class CreateUseCase implements CreateUserUseCasePort {

	constructor(private service: UserService) {}

	async create(user: User): Promise<User> {
		return await this.service.create(user);
	}

}
