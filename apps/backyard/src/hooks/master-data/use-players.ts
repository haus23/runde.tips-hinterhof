import { useRecoilValue } from 'recoil';
import { Player } from 'lib';

import { createEntity } from '@/firebase/db/repository/create-entity';
import { updateEntity } from '@/firebase/db/repository/update-entity';
import { playersState } from '@/state/master-data/players-state';

export function usePlayers() {
  const players = useRecoilValue(playersState);

  const createPlayer = (player: Player) =>
    createEntity<Player>('players', player);

  const updatePlayer = (player: Player) => updateEntity('players', player);

  return { players, createPlayer, updatePlayer };
}
