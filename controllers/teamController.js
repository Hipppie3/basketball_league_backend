import { Team, Player } from '../models/index.js'

export const createTeam = async (req, res) => {
 try{
  const team = await Team.create(req.body);
  res.status(201).json(team);
 } catch (error) {
  console.error('Error creating team:', error);
  res.status(500).json({ message: 'Error creating team', error });
 }
};

export const getAllTeams = async (req, res) => {
 try{
  const teams = await Team.findAll({
   include: {
    model: Player,
    attributes: ['id', 'firstName', 'lastName', 'age', 'position', 'number'],
   },
  });

  if (teams.length === 0) {
   return res.status(404).json({ message: 'No teams found '});
  }
  res.status(200).json(teams);
 } catch (error) {
  console.error('Error fetching teams:', error)
  res.status(500).json({ message: 'Error fetching teams', error});
 }
};

export const getTeam = async (req, res) => {
 try {
  const { id } = req.params;
  const team = await Team.findByPk(id, {
   include: {
    model: Player,
    attributes: ['id', 'firstName', 'lastName', 'age', 'position', 'number'], 
   },
  });

  if (!team) {
   return res.status(404).json({ message: 'Team not found' });
  }

  res.status(200).json(team);
 } catch (error) {
  console.error('Error fetching team:', error);
  res.status(500).json({ message: 'Error fetching team', error })
 }
};

export const updateTeam = async (req, res) => {
 try {
  const { id } = req.params;
  const team = await Team.findByPk(id);

  if (!team) {
   return res.status(404).json({ message: 'Team not found' });
  }

  await team.update(req.body);

  const updatedTeam = await Team.findByPk(id, {
   include: {
    model: Player,
    attributes: ['id', 'firstName', 'lastName', 'age', 'position', 'number'],
   },
  });

  res.status(200).json(updatedTeam);
 } catch (error) {
  console.error('Error updating team:', error);
  res.status(500).json({ message: 'Error updatinig team', error})
 }
};

export const deleteTeam = async (req, res) => {
 try {
  const { id } = req.params;
  const team = await Team.findByPk(id);

  if (!team) {
   return res.status(404).json({ message: 'Team not found' });
  }

  await team.destroy();
  res.status(200).json({ message: 'Team deleted successfully' });
 } catch (error) {
  console.error('Error deleting team:', error);
  res.status(500).json({ message: 'Error deleting team', error });
 }
};