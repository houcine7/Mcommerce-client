export const getProperName = (name: string) => {
  const splittedStr = name?.split(" ");

  if (splittedStr.length >= 2) {
    const properName =
      splittedStr[0].charAt(0).toUpperCase() +
      splittedStr[0].slice(1) +
      " " +
      splittedStr[1].charAt(0).toUpperCase() +
      splittedStr[1].slice(1);

    return properName;
  } else {
    return name;
  }
};

export const getProperDescription = (description: string) => {
  const len = description.length;
  if (len > 70) {
    return description.slice(0, 100) + "...";
  } else {
    return description;
  }
};
