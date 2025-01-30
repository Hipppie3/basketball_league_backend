import Player from './player.js';
import Team from './team.js';

Team.hasMany(Player, { foreignKey: 'teamId' });
Player.belongsTo(Team, { foreignKey: 'teamId' });

export { Player, Team };
