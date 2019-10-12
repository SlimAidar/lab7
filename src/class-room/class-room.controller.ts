import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { Transcript } from '../transcript/transcript.entity';
import { TranscriptService } from '../transcript/transcript.service';
import { ClassRoomService } from './class-room.service';
import { ClassRoom } from './class-room.entity';

@Controller('class-room')
export class ClassRoomController {

  constructor(private readonly classRoomService: ClassRoomService) {}

  @Get()
  @Render('transcripts')
  async all() {
    const classrooms: ClassRoom[] = await this.classRoomService.all();
    return classrooms;
  }

  @Post()
  @Redirect('/transcripts')
  async save(@Body('trans') trans) {
    return await this.classRoomService.save(trans);
  }

}
