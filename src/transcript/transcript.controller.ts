import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { TranscriptService } from './transcript.service';
import { Transcript } from './transcript.entity';

@Controller('transcripts')
export class TranscriptController {

  constructor(private readonly transcriptService: TranscriptService) {}

  @Get()
  @Render('transcripts')
  async all() {
    const transcripts: Transcript[] = await this.transcriptService.all();
    return transcripts;
  }

  @Post()
  @Redirect('/transcripts')
  async save(@Body('trans') trans) {
    return await this.transcriptService.save(trans);
  }
}
