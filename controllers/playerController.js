import Player from '../models/player.js';

export const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
    console.error('Error creating player:', error);  // Log detailed error
    res.status(500).json({ message: 'Error creating player', error });
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.findAll();

    if (players.length === 0) {
      return res.status(404).json({ message: 'No players found' });
    }
    res.status(200).json(players);
  } catch (error) {
    console.error('Error fetching players:', error);  // Log detailed error for debugging
    res.status(500).json({ message: 'Error fetching players', error });
  }
};
