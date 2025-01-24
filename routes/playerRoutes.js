import express from 'express'
import * as playerController from '../controllers/playerController.js'

const router = express.Router();

router.post('/players', playerController.createPlayer);
router.get('/players', playerController.getPlayers);

export default router;