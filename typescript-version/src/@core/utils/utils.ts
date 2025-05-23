const getImagePrefix = () => {
  return process.env.NODE_ENV === "production"
    ? "/materio/"
    : "";
};

export { getImagePrefix };
 