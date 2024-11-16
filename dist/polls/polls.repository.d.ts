import { ConfigService } from '@nestjs/config';
import { Redis } from 'ioredis';
import { AddParticipantData, CreatePollData } from './types';
import { Poll } from './poll.interface';
export declare class PollsRepository {
    private readonly redisClient;
    private readonly ttl;
    private readonly logger;
    constructor(configService: ConfigService, redisClient: Redis);
    createPoll({ votesPerVoter, topic, pollID, userID, }: CreatePollData): Promise<Poll>;
    getPoll(pollID: string): Promise<Poll>;
    addParticipant({ pollID, userID, name, }: AddParticipantData): Promise<Poll>;
}
