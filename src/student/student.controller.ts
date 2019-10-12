import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto } from './dto/student.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  @Render('students')
  async all() {
    return await this.studentService.findAll();
  }

  @Get('/add')
  @Render('add-student')
  async showForm() {
    return await this.studentService.findAll();
  }

  @Post('/add')
  @Render('students')
  async add(@Body() student: StudentDto) {
    return await this.studentService.save(student);
  }
}
