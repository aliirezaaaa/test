import { PollsRepository } from './polls.repository';
import { CreatePollFields, JoinPollFields, RejoinPollFields } from './types';
export declare class PollsService {
    private readonly pollsRepository;
    private readonly logger;
    constructor(pollsRepository: PollsRepository);
    createPoll(fields: CreatePollFields): Promise<{
        poll: import("./poll.interface").Poll;
    }>;
    joinPoll(fields: JoinPollFields): Promise<{
        poll: import("./poll.interface").Poll;
    }>;
    rejoinPoll(fields: RejoinPollFields): Promise<import("./poll.interface").Poll>;
}
