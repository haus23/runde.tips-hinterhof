import { useRecoilValue } from 'recoil';
import { League } from 'lib';

import { createEntity } from '@/firebase/db/repository/create-entity';
import { updateEntity } from '@/firebase/db/repository/update-entity';
import { leaguesState } from '@/state/master-data/leagues-state';

export function useLeagues() {
  const leagues = useRecoilValue(leaguesState);

  const createLeague = (league: League) =>
    createEntity<League>('leagues', league);

  const updateLeague = (league: League) => updateEntity('leagues', league);

  return { leagues, createLeague, updateLeague };
}
