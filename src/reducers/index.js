const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_MAP':
      if (state.show === false) {
        return {
          ...state, show: true
        }
      } 
        return {
          ...state, show: false
        }
      
      default:
      return state;
};
};

export default reducer;
