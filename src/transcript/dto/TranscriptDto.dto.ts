import { IsNotEmpty } from 'class-validator';

export class TranscriptDtoDto {
  @IsNotEmpty()
  degreeTitle: string;
}
