import { Player, Team } from '../models/index.js';

// ✅ Create a New Player (POST /players)
export const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (error) {
    console.error('Error creating player:', error);
    res.status(500).json({ message: 'Error creating player', error });
  }
};

// ✅ Get All Players (GET /players) - Includes Team info
export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({
      include: {
        model: Team, // Include team info
        attributes: ['id', 'name'],
      },
    });

    if (players.length === 0) {
      return res.status(404).json({ message: 'No players found' });
    }
    res.status(200).json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ message: 'Error fetching players', error });
  }
};

// ✅ Update a Player (PUT /players/:id)
export const updatePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByPk(id);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    await player.update(req.body);
    
    // Fetch updated player with team info
    const updatedPlayer = await Player.findByPk(id, {
      include: {
        model: Team,
        attributes: ['id', 'name'],
      },
    });

    res.status(200).json(updatedPlayer);
  } catch (error) {
    console.error('Error updating player:', error);
    res.status(500).json({ message: 'Error updating player', error });
  }
};

// ✅ Delete a Player (DELETE /players/:id)
export const deletePlayer = async (req, res) => {
  try {
    const { id } = req.params;
    const player = await Player.findByPk(id);

    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }

    await player.destroy();
    res.status(200).json({ message: 'Player deleted successfully' });
  } catch (error) {
    console.error('Error deleting player:', error);
    res.status(500).json({ message: 'Error deleting player', error });
  }
};
