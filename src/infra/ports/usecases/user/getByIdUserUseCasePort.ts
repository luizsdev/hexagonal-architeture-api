import { User } from '../../../../entities/userEntity';

export interface GetByIdUserUseCasePort {
	getById(id: number): Promise<User | null>;
}
