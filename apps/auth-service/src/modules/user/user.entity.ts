import { ObjectId } from "bson";
import { EmailStatus, UserTypeOrmEntity } from "./user.typeorm-entity";
import { randomUUID } from "crypto";

export class User {
	private id: string;
	private email: string;
	private code: string;
	private name?: string;
	private emailStatus: EmailStatus;

	constructor(id: string, email: string, emailStatus: EmailStatus, name: string, code: string) {
		this.id = id;
		this.email = email;
		this.name = name;
		this.code = this.code;
		this.emailStatus = emailStatus;
	}

	public static create(name: string, email: string, code?: string) {
		const id = randomUUID();
		const emailStatus = EmailStatus.NOT_SENT;
		if (!code) code = User.generateCode();
		return new User(id, email, emailStatus, name, code);
	}

	private static generateCode(): string {
		return new ObjectId().toString();
	}

	public toTypeOrmEntity(): UserTypeOrmEntity {
		return {
			id: this.id, email: this.email, name: this.name, code: this.code, email_status: this.emailStatus
		}
	}
}