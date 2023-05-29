import { useState,useEffect} from "react"
import { getAllMeal,getRandomMeal } from "../Config/ApiConfig"
import MealList from "./homeAllMeal/MealList"
import Loader from "../components/Loader"
import "./styles/home.css"



export default function Home() {
    
    const [allMeal, setAllMeal] = useState([])
    const [randomMeal, setRandomMeal] = useState([])
    const [random, setRandom] = useState(false)


    useEffect(() =>{
        getAllMeal().then(data => {
            setAllMeal(data.categories)
        })
        getRandomMeal().then(data => {
            setRandomMeal(data.meals[0])
        })
    },[random])
    
  

    const {strMealThumb,strMeal,strInstructions} = randomMeal
    const ingredients = Object.keys(randomMeal)

    
    const handleRandom = () => {
        setRandom(!random)
    }
    
    

    return(
        <div className="home"> 
            
            <div className="container-lg about d-md-flex justify-content-between ">
                <div className="abot_img">
                    
                </div>
                {strMeal ?
                 ( <div className="about_intro" >
                    <img className="intro_img" src={strMealThumb} alt="food"/>
                    <div className="about_title text-light">
                        <h2>{strMeal}</h2>
                        <p>{strInstructions.slice(0, 500)}...</p>
                    </div>
                </div>) : (<Loader/>)}
               

            </div>
            {allMeal.length ? (<MealList allMeal={ allMeal}/>) : (<Loader/>)} 
            <div className="random_meals   text-light " >
                <h2 >Random Meal</h2>
                 <hr></hr>
                <div className="table_card d-md-flex justify-content-lg-around  justify-content-md-between ">
                    <div className= "table_img">
                        <img className="table_random_img" src ={strMealThumb}  alt={strMeal}/>
                    </div>
                    <div className= "table_table">
                        <table className="table text-light">
                            <thead>
                                <tr className="text-dark text-bold">
                                    <th scope="col">Ingredients</th>
                                    <th scope="col">Measure</th>
                                </tr>
                            </thead>
                            <tbody  >
                            
                                
                                    {ingredients.map(item => {
                                        if(item.includes("Ingredient") && randomMeal[item]){
                                            return (
                                                <tr >
                                                    <td>{randomMeal[item]}</td>
                                                    <td>{randomMeal[`strMeasure${item.slice(13)}`]}</td>

                                                </tr>
                                                

                                            )
                                        }
                                    })}

                            
                            </tbody>
                            
                        </table>
                        <button type="button" className="btn btn-outline-dark " onClick={handleRandom} value={random} onChange= {(e) => e.target.value}><h5>Randoms</h5></button>
               

                    </div>

                </div>
            </div>
            
           
        </div>
        )
}