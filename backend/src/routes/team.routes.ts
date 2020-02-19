import { Router } from 'express'
import { getTeam, getTeams, getAllSquad } from '../controllers/team.controller'

const router = Router();

router.route('/')
    .get(getTeam)

router.route('/:teamId')
    .get(getAllSquad);

export default router;