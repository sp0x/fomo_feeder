import { Service, Inject } from 'typedi';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Feed } from '../entity/feed';

@Service()
class FeedsService {
    constructor(@Inject('FeedRepository') private feedsRepository: Repository<Feed>) { }

    async getAllFeeds() {
        return await this.feedsRepository.find();
    }

    async createFeed(feed: any) {
        const { title, uri } = feed;
        console.log('feed', feed);
        const newFeed: Feed = {
            id: uuidv4(),
            title,
            uri
        }
        await this.feedsRepository.save(newFeed);
        return newFeed;
    }
}

export default FeedsService;