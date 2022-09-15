import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTrackerDTO } from 'src/dto/tracker.dto';
import { TrackerService } from 'src/tracker/tracker.service';

@Controller('tracker')
export class TrackerController {
  constructor(private trackerService: TrackerService) {}

  @Post('fetch')
  async fetchUrl(@Body() trackerDto: CreateTrackerDTO): Promise<any> {
    return await this.trackerService.fetchUrl(trackerDto.url);
  }
}
