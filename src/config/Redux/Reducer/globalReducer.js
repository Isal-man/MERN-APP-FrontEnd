const initialState = {
  dataBlogs: [],
  name: "Faisal",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "Isal",
    };
  }
  return state;
};

export default globalReducer;