export const linkToClipboard = (id, type) => {
  let url = '';

  if (type === 'food') {
    url = `http://localhost:3000/foods/${id}`;
  } else {
    url = `http://localhost:3000/drinks/${id}`;
  }

  navigator.clipboard.writeText(url);
  return true;
};

export const setFinished = (checkedIng, totalIng) => {
  if (checkedIng === totalIng) {
    return false;
  }
  return true;
};

export const filterIgredients = (recipe) => {
  const Eight = 8;
  const ingredientList = [];

  for (let i = 1; i <= Eight; i += 1) {
    const ingredientKey = `strIngredient${i}`;
    const measureKey = `strMeasure${i}`;

    if (recipe[ingredientKey] !== ''
    && recipe[measureKey] !== ''
    && recipe[ingredientKey] !== null
    && recipe[measureKey] !== null) {
      const ingredient = `${recipe[ingredientKey]}: ${recipe[measureKey]}`;
      console.log(`Empurrando:${ingredient}`);
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
