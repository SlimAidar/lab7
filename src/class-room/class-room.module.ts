import { Module } from '@nestjs/common';
import { ClassRoomService } from './class-room.service';

@Module({
  providers: [ClassRoomService]
})
export class ClassRoomModule {}
