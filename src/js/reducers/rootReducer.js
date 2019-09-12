const initState = {
  pageTitle: "Home",
  currentWork: 0,
  maxWorks: 3,
  allProjects: [
    {
      id: 1,
      title: "tester1",
      category: "poop",
      mainImage: "url"
    },
    {
      id: 2,
      title: "tester2",
      category: "poop",
      description: "lorem ipsum",
      mainImage: "url"
    },
    {
      id: 3,
      title: "tester3",
      category: "poop",
      mainImage: "url"
    }
  ],
  allSkills: [
    {
      id: 1,
      title: "name",
      level: 1,
      levelName: "Starter",
      image: "url"
    },
    {
      id: 2,
      title: "name",
      level: 1,
      levelName: "Starter",
      image: "url"
    },
    {
      id: 3,
      title: "name",
      level: 1,
      levelName: "Starter",
      image: "url"
    }
  ],
  currentProject: {
    id: 1,
    title: "help me",
    category: "poop",
    description: "lorem",
    mainImage: "url",
    link: "url",
    linkName: "tester",
    tech: [
      {
        title: "tech1",
        image: "url"
      },
      {
        title: "tech2",
        image: "url"
      },
      {
        title: "tech3",
        image: "url"
      }
    ],
    colors: [
      {
        title: "color1",
        color: "#f00"
      },
      {
        title: "color2",
        color: "#f00"
      },
      {
        title: "color3",
        color: "#f00"
      }
    ],
    extraImages: [
      {
        title: "tesetr1",
        url: "url",
        className: ""
      },
      {
        title: "tesetr2",
        url: "url",
        className: ""
      },
      {
        title: "tesetr3",
        url: "url",
        className: ""
      }
    ]
  }
};

const rootReducer = (state = initState, action) => {
  //get works
  if (action.type === "GET_WORKS") {
  }

  return state;
};

export default rootReducer;
