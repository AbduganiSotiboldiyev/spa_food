import CategoriesItem from "./CategoriesItem"
export default function CategoriesList ({categoryMeal = []}) {
    if (categoryMeal.length === 0) {
        return (
            <div>Nothing</div>)
    }
    return (    
        <div className="category_list">
            <hr></hr>
            <h2 className="text-light">Meal categories</h2>
            <hr></hr>
            <div className="meal_list  container d-flex justify-content-between align-item-center flex-wrap flex ">
                {categoryMeal.map(item => (
                    <CategoriesItem key={item.idMeal} {...item}/>
                ))}

            </div>
          

        </div>
    )
}