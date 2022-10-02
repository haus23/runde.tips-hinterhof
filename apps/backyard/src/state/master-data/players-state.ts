import { collection } from '@/firebase/db/repository/collection';
import { Player } from '@/model/master-data/player';
import { atom } from 'recoil';

export const playersState = atom<Player[]>({
  key: 'playersState',
  effects: [({ setSelf }) => collection<Player>('players').subscribe(setSelf)],
});
