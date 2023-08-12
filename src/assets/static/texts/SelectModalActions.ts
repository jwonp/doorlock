export const ADD = "add";
export const EDIT = "edit";
const ActionSet = {
    add:ADD,
    edit:EDIT
} as const;

export type Actions = typeof ActionSet[keyof typeof ActionSet];
