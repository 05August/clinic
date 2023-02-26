export const localStorageUlti = (key, defaultValue) => {
  const get = () => JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
  const set = (value) => localStorage.setItem(key, JSON.stringify(value));
  const remove = () => localStorage.removeItem(key);
  return {
    get,
    set,
    remove,
  };
};
