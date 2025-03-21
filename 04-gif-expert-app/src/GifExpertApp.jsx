import { useState } from "react";

import {GifGrid, AddCategory} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        // categories.push(newCategory);

        setCategories([newCategory, ...categories]);
        // setCategories(cat => [...cat, 'Avatar']);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                // setCategories={setCategories} 
                onNewCategory={(e) => onAddCategory(e)}
                currentCategories={categories}
            />
            {/* listado de Gif */}
            <ol>
                {
                    categories.map(category => (
                        <GifGrid
                          key={category}
                          category={category} />
                    ))
                }
            </ol>
            {/* gif item */}
        </>
    )
}
