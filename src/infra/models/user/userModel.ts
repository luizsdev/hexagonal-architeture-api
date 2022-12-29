import { User } from '../../entities/userEntity';
import { UserModelPort } from '../../ports/models/user/userModelPort';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserModel implements UserModelPort {

	async create(user: User): Promise<User> {
		return await prisma.user.create({ data: user });
	}

	async get(): Promise<User[]> {
		return await prisma.user.findMany();
	}

	async getById(id: number): Promise<User | null> {
		const data = await prisma.user.findUnique({ where: { id } });

		if (data !== null) {
			return data;
		}
		
		return null;
	}

	async update(id: number, user: User): Promise<User> {
		return await prisma.user.update({ where: { id }, data: user });
	}

	async delete(id: number): Promise<User> {
		return await prisma.user.delete({ where: { id } });
	}

}
