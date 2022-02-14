import "./Recipe.css";

import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import SingleRecipe from "./SingleRecipe";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);

  return (
    <div className={"recipe"}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && <SingleRecipe recipe={recipe} />}
    </div>
  );
}

export default Recipe;
