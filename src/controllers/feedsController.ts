import { JsonController, Get, Post, Body, Req, Res } from 'routing-controllers';
import { Request, Response } from 'express';
import FeedsService from '../services/feedsService';
import { Service } from 'typedi';


interface FeedDto {
    title: string;
    url: string;
}

@Service()
@JsonController('/feeds')
export class FeedsController {
    constructor(private feedsService: FeedsService) { }

    @Get('/')
    getAll(@Req() request: Request, @Res() response: Response) {
        return this.feedsService.getAllFeeds();
    }

    @Post('/')
    async create(@Body() feed: FeedDto, @Req() request: Request, @Res() response: Response) {
        return await this.feedsService.createFeed(feed);
    }
}