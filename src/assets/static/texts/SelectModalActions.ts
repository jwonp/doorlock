import {SCAN} from './DataTypes';

export const ADD = 'add';
export const EDIT = 'edit';

const ActionSet = {
  add: ADD,
  edit: EDIT,
  scan: SCAN,
} as const;

export type Actions = (typeof ActionSet)[keyof typeof ActionSet];
