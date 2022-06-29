export const setLocalKey = (key, value) => {
  // Setando o item
  const stringified = typeof value === 'string' ? value : JSON.stringify(value);
  localStorage.setItem(key, stringified);

  // Verificando se realmente setou
  // const itemSeted = localStorage.getItem(key);
  // console.log('setLocalKey', JSON.parse(itemSeted));
};

export const getLocalKey = (key) => {
  // Pegando o item
  const itemGeted = localStorage.getItem(key);
  // console.log(`getLocalKey: ${JSON.parse(itemGeted)}`);
  return JSON.parse(itemGeted);
};

export default setLocalKey;
