import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Student } from './student/student.entity';
import { TranscriptController } from './transcript/transcript.controller';
import { TranscriptService } from './transcript/transcript.service';
import { ClassRoomController } from './class-room/class-room.controller';
import { ClassRoomModule } from './class-room/class-room.module';

@Module({
  imports: [StudentModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'lab7',
    entities: [Student],
    synchronize: true,
  }), ClassRoomModule ],
  controllers: [AppController, TranscriptController, ClassRoomController],
  providers: [AppService, TranscriptService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
