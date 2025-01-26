import express from 'express'
import * as teamController from '../controllers/teamController.js'

const router = express.Router();

router.post('/teams', teamController.createTeam);
router.get('/teams', teamController.getTeams);

export default router;