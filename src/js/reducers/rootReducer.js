const initState = {
  pageTitle: "Home",
  currentWork: 0,
  maxWorks: 0
};

const rootReducer = (state = initState, action) => {
  //get works
  if (action.type === "GET_WORKS") {
  }

  return state;
};

export default rootReducer;
