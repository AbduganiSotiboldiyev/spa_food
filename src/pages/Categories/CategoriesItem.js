import {Link} from "react-router-dom"

export default function CategoriesItem ({strMeal,idMeal,strMealThumb}) {
    return(
        <div  id={idMeal} className="mb-4 card_category "> 
            <div id={idMeal} className="card card_category_item" >
            <img src={strMealThumb} className="card-img-top" alt={strMeal}/>
            <h5 className="card-title text-black card_title">{strMeal.slice(0,20)}...</h5>
            <div className="card-body">
                
                <Link to={`/recipe/${idMeal}`} className="btn btn_categories btn_category">Show Recipe</Link>
            </div>
            </div>
        </div>
        )
}