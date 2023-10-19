import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm";
import { UserTypeOrmEntity } from "./user.typeorm-entity";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserRepository {
	constructor(@InjectRepository(UserTypeOrmEntity) private repository: Repository<UserTypeOrmEntity>) { }
	
	async create(user: User){
		const userEntity = user.toTypeOrmEntity();
		await this.repository.create(userEntity);
	}
}