// data/index.js
import { indoorMatches } from "./indoor.matches.js";
import { outdoorMatches } from "./outdoor.matches.js";
import { indianMatches } from "./indian.matches.js";
import { gymMatches } from "./gym.matches.js";

export const matches = [
  ...indoorMatches,
  ...outdoorMatches,
  ...indianMatches,
  ...gymMatches
];
