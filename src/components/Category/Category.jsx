import CategoryCard from "./CategoryCard";
import categoryInfo from "./categoryData";

const Category = () => {
  return (
    <section>
      {categoryInfo.map((info) => {
        <CategoryCard data={info} />;
      })}
    </section>
  );
};

export default Category;
