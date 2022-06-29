export const linkToClipboard = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url);
  return true;
};

export const filterIgredients = (recipe) => {
  const Eight = 8;
  const ingredientList = [];

  for (let i = 1; i <= Eight; i += 1) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (recipe[ingredientKey] !== '' && recipe[measureKey] !== '') {
      const ingredient = `${recipe[ingredientKey]}: ${recipe[measureKey]}`;
      ingredientList.push(ingredient);
    }
  }
  return ingredientList;
};

export const verifyChecked = ({ target }, checkedIng) => {
  const nameIngredient = (target.name);
  return (target.checked)
    ? ([...checkedIng, nameIngredient])
    : (checkedIng.filter((ingredient) => ingredient !== nameIngredient));
};
