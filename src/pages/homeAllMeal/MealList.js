import MealItem from "./MealItem"
import "./styles/meallist.css"
export default function MealList ({allMeal = []}) {
    if (allMeal.length === 0) {
        return (
            <div>Nothing</div>)
    }
    return (    
        <div >
            <hr></hr>
            <h2 className="text-light">Meal categories</h2>
            <hr></hr>
            <div className="meal_list mt-5 container d-flex justify-content-between align-item-center flex-wrap flex ">
                {allMeal.map(item => (
                    <MealItem key={item.idCategory} {...item}/>
                ))}

            </div>
            <hr></hr>
            <hr></hr>

        </div>
    )
}