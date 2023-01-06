import { User } from '../../../entities/userEntity';

export interface UserServicePort {
	create(user: User): Promise<User>;
	get(): Promise<User[]>;
	getById(id: number): Promise<User | null>;
	update(user: User, id: number): Promise<User>;
	delete(id: number): Promise<User>;
}
