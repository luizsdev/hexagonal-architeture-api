import { User } from '../../../entities/userEntity';

export interface UserModelPort {
	create(user: User): Promise<User>;
	get(): Promise<User[]>;
	getById(id: number): Promise<User | null>;
	update(id: number, user: User): Promise<User>;
	delete(id: number): Promise<User>;
}
