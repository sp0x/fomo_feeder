"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// SQLite database for feeds
// router.get('/', async (req: Request, res: Response) => {
//     const feeds = await db.all('SELECT * FROM feeds');
//     res.json(feeds);
// });
// router.put('/', async (req: Request, res: Response) => {
//     const { title, url } = req.body;
//     const id = uuidv4();
//     await db.run('INSERT INTO feeds (id, title, url) VALUES (?, ?, ?)', [id, title, url]);
//     res.json({ title, url });
// });
// router.get('/:id', (req: Request, res: Response, next) => {
//     const { id } = req.params;
//     const task = db.get('SELECT * FROM feeds WHERE id = ?', [id]);
//     if (!task) {
//         next(createError(404, 'Feed not found', { type: 'feed:not_found' }))
//     } else {
//         res.json(task);
//     }
// });
// router.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
//     res.status(err.status || 500);
//     res.json({
//         type: err.type || 'https://fomo_feeder.com/error',
//         title: err.title,
//         detail: err.stack,
//         status: err.status
//     });
// });
exports.default = router;
