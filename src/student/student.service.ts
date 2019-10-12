import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { StudentDto } from './dto/student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private readonly studentRepo: Repository<Student>) {}

  findAll(): Promise<Student[]> {
    return this.studentRepo.find();
  }

  create(student: Student): Promise<Student> {
    return this.studentRepo.save(student);
  }

  save(student: StudentDto): Promise<Student> {
    return this.studentRepo.save(student);
  }
}
