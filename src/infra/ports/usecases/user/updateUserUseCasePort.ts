import { User } from '../../../../entities/userEntity';

export interface UpdateUserUseCasePort {
	update(user: User, id: number): Promise<User>;
}
