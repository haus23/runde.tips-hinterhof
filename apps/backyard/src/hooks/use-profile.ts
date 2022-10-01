import { useAtom } from 'jotai';

import { updateProfile, User } from 'lib';
import { authState } from '@/state/auth-state';

export type Profile = User;

export function useProfile() {
  const [profile, setProfile] = useAtom(authState);

  const updateDisplayName = async (displayName: string) => {
    await updateProfile({ displayName });
    setProfile({ ...profile!, displayName });
  };

  return { profile: profile as Profile, updateDisplayName };
}
