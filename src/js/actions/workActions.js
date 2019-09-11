export const getWork = () => {
  return {
    type: "GET_WORKS"
  };
};

export const getProject = id => {
  return {
    type: "GET_Project",
    id: id
  };
};
