import { Service, Inject } from 'typedi';
import { Database } from 'sqlite';

@Service()
class FeedsService {
    constructor(@Inject('db') private db: Database) { }

    async getAllFeeds() {
        const feeds = await this.db.all('SELECT * FROM feeds');
        return feeds;
    }

    async createFeed(feed: any) {
        const { title, url } = feed;
        const result = await this.db.run('INSERT INTO feeds (title, url) VALUES (?, ?)', [title, url]);
        return result;
    }
}

export default FeedsService;