import {Link} from "react-router-dom"
import "./styles/meallist.css"
export default function MealItem ({strCategory,idCategory,strCategoryThumb}) {
    return(
        <div  id={idCategory} className="mb-4"> 
            <div id={idCategory} className="card card_meal_list" >
            <img src={strCategoryThumb} className="card-img-top" alt={strCategory}/>
            <h5 className="card-title text-black">{strCategory}</h5>
            <div className="card-body">
                
                <Link to={`/categories/${strCategory}` }className="btn btn_categories">Categories</Link>
            </div>
            </div>
        </div>
        )
}