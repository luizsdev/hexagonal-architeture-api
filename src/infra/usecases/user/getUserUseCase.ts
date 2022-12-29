import { User } from '../../entities/userEntity';
import { GetUserUseCasePort } from '../../ports/usecases/user/getUserUseCasePort';
import { UserService } from '../../services/user/userService';

export class GetUserUseCase implements GetUserUseCasePort {

	constructor(private service: UserService) {}

	async get(): Promise<User[]> {
		return await this.service.get();
	}

}
