export const loggerMiddleware = store => next => action => {
  const result = next(action);
  // eslint-disable-next-line no-console
  console.log('logger', store.getState());
  return result;
};
