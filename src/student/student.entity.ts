import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
