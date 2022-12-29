import { User } from '../../../../entities/userEntity';

export interface DeleteUserUsecasePort {
	delete(id: number): Promise<User>;
}
