import { User } from '../../entities/userEntity';
import { GetByIdUserUseCasePort } from '../../ports/usecases/user/getByIdUserUseCasePort';
import { UserService } from '../../services/user/userService';

export class GetByIdUseCase implements GetByIdUserUseCasePort {

	constructor(private service: UserService) {}

	async getById(id: number): Promise<User | null> {
		return await this.service.getById(id);
	}

}
