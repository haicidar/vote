import { Body, Controller, Post, HttpCode } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./user.dto";
import { User } from "./user.entity";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService){}

	@Post()
	@HttpCode(201)
	async getUser(@Body() dto: CreateUserDto){
		await this.userService.create(dto);
	}
}