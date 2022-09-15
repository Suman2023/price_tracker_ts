import { Module } from '@nestjs/common';
import { TrackerController } from '../tracker/tracker.controller';
import { TrackerService } from 'src/tracker/tracker.service';

@Module({
  controllers: [TrackerController],
  providers: [TrackerService],
})
export class TrackerModule {}
