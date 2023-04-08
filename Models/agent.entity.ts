import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
} from "typeorm";
import "reflect-metadata";
import { User } from "./user.entity";

@Entity("agent")
export class Agent extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: number | string;

	@Column()
	fullname: string;

	@Column()
	email: string;

	@Column()
	area: string;

	@Column()
	location: string;

	@Column()
	password: string;

	@Column()
	generatedCardNnumber: string;

	@ManyToOne(() => User, (connectors) => connectors.user)
	connectors: User[];
}
