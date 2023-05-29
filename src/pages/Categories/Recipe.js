import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import { getMealById } from "../../Config/ApiConfig"
import "./categories.css"

export default function Recipe() {
    const [recipeMeal ,setRecipeMeal] = useState([]),
        [openRecipe,setOpenRecipe] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        getMealById(id).then(data => {
            setRecipeMeal(data.meals[0])
        })
    },[id])
    
    const handleTable = () =>{
        setOpenRecipe(!openRecipe)
    }

    const {idMeal,strArea,strInstructions,strMeal,strMealThumb,strYoutube} = recipeMeal


    return (
        <div className="recipe container" id={idMeal}> 
            
            <div className="recipe_img">
                <img src={strMealThumb} alt={strMeal} className="recipe_img_img" />
                <span className="recipe_title">{strMeal}</span>
            </div>
            {strArea ? (
                <h2 className=""><b>Food belongs: </b> {strArea} </h2>
            ): null} 
            <div className="recipe_instruction container"> 
                <p className=""> <b className="d-inline"> Instruction: </b><b>{strInstructions}</b></p>
            </div>
            <div className="show_ingredient" >
                <button className="btn btn-primary" onClick={handleTable}>
                    Show recipe
                </button>

                {openRecipe ? (
                    <table className="table text-light">
                        <thead>
                            <tr className="text-dark text-bold">
                                <th scope="col">Ingredients</th>
                                <th scope="col">Measure</th>
                            </tr>
                        </thead>
                        <tbody  key={recipeMeal.idMeal}  >
                                {Object.keys(recipeMeal).map((item) => {
                                    if(item.includes("Ingredient") && recipeMeal[item]){
                                        return (
                                            <tr >
                                                <td>{recipeMeal[item]}</td>
                                                <td>{recipeMeal[`strMeasure${item.slice(13)}`]}</td>

                                            </tr>
                                            

                                        )
                                    }
                                })}

                        
                        </tbody>
                        
                    </table>


                ): null} 
                </div>
            <div className="recipe_video">
                <h1>Cooking Method</h1>
                {strYoutube ? (
                    <iframe className="recipe_video" width="500vw" height="500vh" src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} title={idMeal} ></iframe>
                ) : (<p> No video found</p>)}
            </div>
        </div>
    )
}