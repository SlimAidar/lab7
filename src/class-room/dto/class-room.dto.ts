import { Student } from '../../student/student.entity';
import { IsNotEmpty } from 'class-validator';

export class ClassRoomDto {
  @IsNotEmpty()
  buildingName: string;
  @IsNotEmpty()
  roomNumber: number;
  students?: Student[];
}
