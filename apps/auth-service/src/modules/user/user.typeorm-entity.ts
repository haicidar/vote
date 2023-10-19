import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export enum EmailStatus {
	NOT_SENT,
	SENT,
	ERROR
}

@Entity({ name: "user" })
export class UserTypeOrmEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ type: "varchar" })
	email: string;

	@Column({ type: "varchar", nullable: true })
	name?: string;

	@Column({ type: "varchar", nullable: true })
	code?: string;

	@Column({ type: "enum", enum: EmailStatus, default: EmailStatus.NOT_SENT })
	email_status: EmailStatus;
}
