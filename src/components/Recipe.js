import styles from "./Recipe.module.scss";
import pizza from "../assets/images/pizza.jpeg";

function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={pizza} alt="recipe" />
      </div>
      <div
        className={`${styles.recipeTitle}  d-flex flex-row align-items-center justify-content-center`}
      >
        <h3>Pizza</h3>
      </div>
    </div>
  );
}

export default Recipe;
