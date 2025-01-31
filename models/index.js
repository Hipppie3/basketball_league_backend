import Player from './player.js';
import Team from './team.js';
import Stat from './stat.js';

Team.hasMany(Player, { foreignKey: 'team_id' });
Player.belongsTo(Team, { foreignKey: 'team_id' });
Player.hasMany(Stat, { foreignKey: 'player_id'});
Stat.belongsTo(Player, { foreignKey: 'player_id'})

export { Player, Team, Stat };
