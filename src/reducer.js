const reducer = (state = 23, action) => {
    switch (action.type){
      case 'inc':
        return state + 1;
      case 'dec':
        return state - 1;
      case 'refr':
        return state = 0;
      default:
        return state
    }
  }

  export default reducer;