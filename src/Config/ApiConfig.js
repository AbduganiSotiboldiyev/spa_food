import { API_URL } from "./Api";

const getAllMeal = async () => {
    const response = await fetch(API_URL + "categories.php" )
    return response.json()
}

const getMealById = async (mealId) => {
    const response = await fetch(API_URL + "lookup.php?i=" + mealId)  
    return response.json()
}

const getFilterMeal = async (name) => {
    const response = await fetch(API_URL + "filter.php?c=" + name)
    return response.json()
}

const getRandomMeal = async () => {
    const response = await fetch(API_URL + "random.php")
    return   response.json()
}

export {getAllMeal,getMealById,getFilterMeal,getRandomMeal}