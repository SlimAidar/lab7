import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../student/student.entity';

export class ClassRoom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  buildingName: string;

  @Column()
  roomNumber: number;

  @OneToMany(type => Student, object => object.classRoom)
  students: Student[];
}
