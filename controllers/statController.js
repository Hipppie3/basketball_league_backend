import { Stat, Player } from '../models/index.js';

// Create a New Stat (Post /stats)
export const createStat = async (req, res) => {
 try {
  const stat = await Stat.create(req.body);
  res.status(201).json(stat);
 } catch (error) {
  console.error('Error creating stat:', error);
  res.status(500).json({ message: 'Error creating stat', error})
 }
};

// Get All Stats (GET /stats) 
export const getAllStats = async (req, res) => {
 try {
  const stats = await Stat.findAll({
   include: {
    model: Player,
    attributes: { exclude: ['createdAt', 'updatedAt']}
   },
  });

  if (stats.length === 0) {
   return res.status(404).json({ message: 'No stats found' });
  }
  
  res.status(200).json(stats);
 } catch (error) {
  console.error('Error fetching stats:', error);
  res.status(500).json({ message: 'Error fetching stats', error})
 }
};

// Get a Stat by ID (GET /stats/:id)
export const getStat = async (req, res) => {
  try {
    const { id } = req.params;
    const stat = await Stat.findByPk(id, {
      include: {
        model: Player, // Include team info
        attributes: { exclude: ['createdAt', 'updatedAt']}
      },
    });

    if (!stat) {
      return res.status(404).json({ message: 'Stat not found' });
    }

    res.status(200).json(stat);
  } catch (error) {
    console.error('Error fetching stat:', error);
    res.status(500).json({ message: 'Error fetching stat', error });
  }
};

// Update a Stat (PUT /stats/:id)
export const updateStat = async (req, res) => {
 try {
  const { id } = req.params;
  const stat = await Stat.findByPk(id);

  if (!stat) {
   return res.status(404).json({ message: 'Stat not found'});
  }

  await stat.update(req.body);

  // Fetch updated stat with player info
  const updatedStat = await Stat.findByPk(id, {
   include: {
    model: Player,
    attributes: { exclude: ['createdAt', 'updatedAt']},
   },
  });

  res.status(200).json(updatedStat);
 } catch (error) {
  console.error('Error updating stat:', error);
  res.status(500).json({ message: 'Error updating stat', error })
 }
};

// Delete a Stat (DELETE /stats/:id)
export const deleteStat = async (req, res) => {
 try {
  const {id} = req.params;
  const stat = await Stat.findByPk(id);

  if (!stat) {
   return res.status(404).json({ message: 'Stat not found'});
  }

  await stat.destroy();
  res.status(200).json({ message: 'Stat deleted successfully'});
 } catch (error) {
  console.error('Error deleting stat:', error)
  res.status(500).json({ message: 'Error deleting stat', error})
 }
}