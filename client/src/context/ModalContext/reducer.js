export function modalReducer(state, action) {
  switch (action.type) {
    case "hide":
      return {
        modalType: null,
        modalProps: { open: false },
      };
    case "show":
      return {
        modalType: action.modalType,
        modalProps: action.modalProps,
      };
    default:
      return {
        ...state,
      };
  }
}

export const initialState = {
  modalType: null,
  modalProps: {},
};
