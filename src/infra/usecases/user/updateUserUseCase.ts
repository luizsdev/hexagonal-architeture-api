import { User } from '../../entities/userEntity';
import { UpdateUserUseCasePort } from '../../ports/usecases/user/updateUserUseCasePort';
import { UserService } from '../../services/user/userService';

export class UpdateUseCase implements UpdateUserUseCasePort {

	constructor(private service: UserService) {}

	async update(user: User, id: number): Promise<User> {
		return await this.service.update(user, id);
	}

}
