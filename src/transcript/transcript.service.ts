import { Injectable } from '@nestjs/common';
import { Transcript } from './transcript.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TranscriptDtoDto } from './dto/TranscriptDto.dto';

@Injectable()
export class TranscriptService {

  constructor(@InjectRepository(Transcript) private readonly transcriptRepo: Repository<Transcript>) {}

  all(): Promise<Transcript[]> {
    return this.transcriptRepo.find();
  }

  save(transcript: TranscriptDtoDto): Promise<Transcript> {
    return this.transcriptRepo.save(transcript);
  }

}
