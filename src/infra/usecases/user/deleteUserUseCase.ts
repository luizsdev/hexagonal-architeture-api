import { User } from '../../entities/userEntity';
import { DeleteUserUsecasePort } from '../../ports/usecases/user/deleteUserUsecasePort';
import { UserService } from '../../services/user/userService';

export class DeleteUseCase implements DeleteUserUsecasePort {

	constructor(private service: UserService) {}

	async delete(id: number): Promise<User> {
		return await this.service.delete(id);
	}

}
