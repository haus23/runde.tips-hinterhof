import { atom } from 'jotai';
import { User } from 'lib';

export const authState = atom<User | null>(null);
