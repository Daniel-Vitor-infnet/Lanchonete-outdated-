const getTitle = (action_type) => {
    switch (action_type) {
      case "1":
        return "sleep";
      case "2":
        return "eat";
      case "3":
        return "diaper";
      default:
        return "eat";
    }
  };

  
export default getTitle;