import Team from '../models/team.js';

export const createTeam = async (req, res) => {
 try{
  const team = await Team.create(req.body);
  res.status(201).json(team);
 } catch (error) {
  console.error('Error creating team:', error);
  res.status(500).json({ message: 'Error creating team', error });
 }
};

export const getTeams = async (req, res) => {
 try{
  const teams = await Team.findAll();
  if (teams.length === 0) {
   return res.status(404).json({ message: 'No teams found '});
  }
  res.status(200).json(teams);
 } catch (error) {
  console.error('Error fetching teams:', error)
  res.status(500).json({ message: 'Error fetching teams', error});
 }
};