interface Hero {
  name: string;
  skill: string;
}

// const Capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// const capt: Hero = {};
const capt = {} as Hero;
capt.name = 'capt';
capt.skill = 'shield';

// const a: string | null;
// a!;
