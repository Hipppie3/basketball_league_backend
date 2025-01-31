import express from 'express'
import * as teamController from '../controllers/teamController.js'

const router = express.Router();

router.get('/teams', teamController.getAllTeams);
router.post('/teams', teamController.createTeam);
router.get('/teams/:id', teamController.getTeam);
router.put('/teams/:id', teamController.updateTeam);
router.delete('/teams/:id', teamController.deleteTeam);


export default router;