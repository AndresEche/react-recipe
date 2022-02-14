function SingleRecipe({ recipe }) {
  return (
    <>
      <h2 className={"page-title"}>{recipe.title}</h2>
      <p>Takes {recipe.cookingTime} to cook.</p>
      <ul>
        {recipe.ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <p className="method">{recipe.method}</p>
    </>
  );
}

export default SingleRecipe;
