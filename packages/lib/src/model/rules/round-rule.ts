import { Rule } from './rule';

export type RoundRuleId = 'keine-besonderheiten';

export type RoundRule = Rule & {
  id: RoundRuleId;
};

export const roundRuleDescriptions: RoundRule[] = [
  {
    id: 'keine-besonderheiten',
    name: 'Keine Besonderheiten',
    description: `
    Es gibt keine Sonderregeln zum Abschluss einer Runde.
  `,
  },
];
