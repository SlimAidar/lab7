import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Transcript } from '../transcript/transcript.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  studentNumber: string;

  @Column({nullable: false})
  firstName: string;

  @Column({nullable: true})
  middleName: string;

  @Column({nullable: true})
  gpa: number;

  @Column({nullable: false})
  lastName: string;

  @Column({nullable: false})
  dateOfEnrollment: Date;

  @OneToOne(type => Transcript, object => object.student)
  transcript: Transcript;
}
