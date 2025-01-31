import express from 'express';
import * as playerController from '../controllers/playerController.js';

const router = express.Router();

router.get('/players', playerController.getAllPlayers); // ✅ Get all players
router.post('/players', playerController.createPlayer); // ✅ Create player
router.get('/players/:id', playerController.getPlayer); // ✅ Get player by ID
router.put('/players/:id', playerController.updatePlayer); // ✅ Update player
router.delete('/players/:id', playerController.deletePlayer); // ✅ Delete player

export default router;
