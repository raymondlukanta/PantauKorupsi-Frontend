import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({ADD_ITEM: null, DELETE_ITEM: null})

export function addItem(fields) {
  return {
    type: ActionTypes.ADD_ITEM,
    fields,
  };
}

export function delItem(index) {
  return {
    type: ActionTypes.DELETE_ITEM,
    index,
  };
}
