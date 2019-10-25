const compose = (...func) => (component) => {
  return func.reduceRight((prevResult, value) => value(prevResult), component);
};

export default compose;
