export const fetchApis = async (endpoint, key) => {
  const response = await fetch(endpoint);
  const json = await response.json();
  return (json[key]);
};

export default fetchApis;
