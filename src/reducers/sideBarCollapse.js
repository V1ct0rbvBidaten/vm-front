const TOGGLE_COLLAPSE = "TOGGLE_COLLAPSE";

export const toggleCollapse = () => ({
  type: TOGGLE_COLLAPSE,
});

const initialState = {
  isCollapsed: false,
};

const collapseReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSE:
      return {
        ...state,
        isCollapsed: !state.isCollapsed,
      };
    default:
      return state;
  }
};

export default collapseReducer;
