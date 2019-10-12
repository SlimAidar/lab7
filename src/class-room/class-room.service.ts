import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassRoom } from './class-room.entity';
import { Transcript } from '../transcript/transcript.entity';
import { TranscriptDtoDto } from '../transcript/dto/TranscriptDto.dto';
import { Repository } from 'typeorm';
import { ClassRoomDto } from './dto/class-room.dto';

@Injectable()
export class ClassRoomService {

  constructor(@InjectRepository(ClassRoom) private readonly classRoomRepo: Repository<ClassRoom>) {}

  all(): Promise<ClassRoom[]> {
    return this.classRoomRepo.find();
  }

  save(classRoom: ClassRoomDto): Promise<ClassRoom> {
    return this.classRoomRepo.save(classRoom);
  }
}
