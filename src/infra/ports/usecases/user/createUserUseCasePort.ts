import { User } from '../../../../entities/userEntity';

export interface CreateUserUseCasePort {
	create(user: User): Promise<User>;
}
