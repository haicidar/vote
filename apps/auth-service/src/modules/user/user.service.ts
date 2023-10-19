import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { randomUUID } from "crypto";
import { CreateUserDto } from "./user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService{
	constructor(private readonly userRepository: UserRepository){}

	async create(dto: CreateUserDto){
		const {name, email, code} = dto;
		const user: User = User.create(name, email, code);
		await this.userRepository.create(user);
	}
}