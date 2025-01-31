import express from 'express';
import * as statController from '../controllers/statController.js'

const router = express.Router();

router.get('/stats', statController.getAllStats);
router.post('/stats', statController.createStat);
router.get('/stats/:id', statController.getStat);
router.put('/stats/:id', statController.updateStat);
router.delete('/stats/:id', statController.deleteStat);

export default router;