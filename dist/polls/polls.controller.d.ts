import { CreatePollDto, JoinPollDto } from './dtos';
import { PollsService } from 'src/polls/polls.service';
export declare class PollsController {
    private pollsService;
    constructor(pollsService: PollsService);
    create(createPollDto: CreatePollDto): Promise<{
        poll: import("./poll.interface").Poll;
    }>;
    join(joinPollDto: JoinPollDto): Promise<{
        poll: import("./poll.interface").Poll;
    }>;
    rejoin(): Promise<import("./poll.interface").Poll>;
}
