
const initialState = {
  currentSection: 'Section 1',
};

function reducer(state = initialState, action = {}) {
  const { payload, type } = action;
  switch (type) {
    case 'CHANGE_SECTION': {
      return { ...state, currentSection: payload};
    }
      break;
    default:
      return state

  }

}

export default reducer;
