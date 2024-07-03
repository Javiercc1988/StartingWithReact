import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon ball"]);

  const onAddCategory = (newCategory) => {
    const existCategory = categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    );

    if (existCategory) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onAddNewCategory={(event) => onAddCategory(event)} />

      {
        categories.map((category) => (
          <GifGrid category={category} />
        ))
      }
    </>
  );
};
