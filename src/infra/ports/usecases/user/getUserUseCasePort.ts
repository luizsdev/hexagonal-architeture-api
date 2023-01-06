import { User } from '../../../entities/userEntity';

export interface GetUserUseCasePort {
	get(): Promise<User[]>;
}
