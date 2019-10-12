import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class Transcript {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  degreeTitle: string;

  @OneToOne(type => Student, object => object.transcript)
  student: Student;
}
