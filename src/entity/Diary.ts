import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Diary extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: Date;

  @Column({ type: "longtext" })
  content: string;

  @Column({ type: "decimal", precision: 9, scale: 6 })
  latitude: number;

  @Column({ type: "decimal", precision: 9, scale: 6 })
  longitude: number;

  @ManyToOne((type) => User)
  @JoinColumn({ name: "writer" })
  writer: User;
}
