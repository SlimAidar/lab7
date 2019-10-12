import { IsDate, IsNotEmpty, IsNumber, Length } from 'class-validator';

export class StudentDto {
  readonly studentNumber: string;
  @IsNotEmpty()
  readonly firstName: string;
  readonly middleName?: string;
  @IsNumber()
  readonly gpa?: number;
  @IsNotEmpty()
  readonly lastName: string;
  @IsNotEmpty()
  @IsDate()
  readonly dateOfEnrollment: Date;
}
