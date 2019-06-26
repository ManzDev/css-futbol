import avatars from '../assets/*.jpg';

const DEMARCATION = ['POR', 'DEF', 'DEF', 'DEF', 'DEF', 'MED', 'MED', 'MED', 'DEL', 'DEL', 'DEL'];

const random = (min = 0, max) => min + ~~(Math.random() * (max - min));
const slug = name => name.toLowerCase().replace(/ /, '-');

const names = {
  keepers: [
    'Benji Price', 'Ed Warner', 'Alan Crockett', 'Teo Sellers', 'Steve Harts'
  ],
  players: [
    'Oliver Atom', 'Bruce Harper', 'Tom Baker', 'Mark Lenders', 'Julian Ross',
    'Danny Mellow', 'Philip Callahan', 'James Derrick', 'Jason Derrick', 'Patrick Everett',
    'Ted Carter', 'Paul Diamond', 'Bob Denver', 'Roberto Sedinho', 'Clifford Yuma',
    'Johnny Mason', 'Ralph Peterson', 'Jack Morris', 'Jeff Turner', 'Patty Haydee',
    'Arthur Foster', 'Amy Aoba', 'Peter Colby', 'Charlie Custer', 'Frenky Gilbert',
    'Jill Taylor', 'Timoty Vance', 'Richard Storke', 'Billy Cramer', 'Bart Johnson'
  ]
};

const getKeeper = () => names.keepers.splice(random(0, names.keepers.length), 1)[0] || 'Mr. Undefined';
const getPlayer = () => names.players.splice(random(0, names.players.length), 1)[0] || 'Mr. Undefined';

export default class Teams {
  static createTeam () {
    const team = [];

    for (let i = 0; i < 11; i++) {
      const name = i === 0 ? getKeeper() : getPlayer();

      const player = {
        name,
        avatar: avatars[ slug(name) ],
        stats: {
          velocity: random(40, 100),
          resistance: random(40, 100),
          aggressiveness: random(40, 100),
          quality: random(40, 100),
          energy: random(40, 100)
        },
        demarcation: DEMARCATION[i]
      };

      player.stats.media = ~~((Object.values(player.stats).reduce((p, c) => p + c)) / 5);
      team.push(player);
    }

    return team;
  }
};
