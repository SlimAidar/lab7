import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @Render('students')
  async all() {
    const students: Student[] = await this.studentService.findAll()
    return {students} ;
  }

  @Get('/add')
  @Render('add-student')
  async showForm() {
    return await this.studentService.findAll();
  }

  @Post('/add')
  @Redirect('/students')
  async add(@Body() student: StudentDto) {
    await this.studentService.save(student);
  }
}
