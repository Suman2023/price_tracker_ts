import { CreateTrackerDTO } from 'src/dto/tracker.dto';
import { TrackerService } from './tracker.service';
export declare class TrackerController {
    private trackerService;
    constructor(trackerService: TrackerService);
    fetchUrl(trackerDto: CreateTrackerDTO): Promise<any>;
}
