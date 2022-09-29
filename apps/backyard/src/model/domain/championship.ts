import { BaseModel } from '@/firebase/db/base-model';

export interface Championship extends BaseModel {
  title: string;
  nr: number;
  rulesId: string;
  published: boolean;
  completed: boolean;
}
