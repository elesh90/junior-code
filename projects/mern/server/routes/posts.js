import express from 'express';
import {
    deleteAllPosts,
    getFeedPosts,
    getUserPosts,
    likePost
} from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/** READ */
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

/** UPDATE */
router.patch('/:id/like', verifyToken, likePost);

/** DELETE */
router.delete('/delete', verifyToken, deleteAllPosts);

export default router;