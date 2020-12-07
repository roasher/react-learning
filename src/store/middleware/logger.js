export const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log("logger", store.getState());
  return result;
}