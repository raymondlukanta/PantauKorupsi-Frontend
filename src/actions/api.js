import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({RESET_ERROR_MESSAGE: null})

// Resets the currently visible error message.
export function resetErrorMessage() {
  return {
    type: ActionTypes.RESET_ERROR_MESSAGE
  }
}