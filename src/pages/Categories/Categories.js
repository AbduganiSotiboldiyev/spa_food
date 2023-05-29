import { useState, useEffect } from "react"
import { useParams,useLocation,useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getFilterMeal } from "../../Config/ApiConfig"
import CategoriesList from "./CategoriesList"
import Search from "./Search"

export default function Categories () {

    const [categoryMeal,setCategoryMeal] = useState([])
    const [searchMeal,setSearchMeal] = useState([])
    const {name} = useParams()
    const {pathname,search} = useLocation()
    const {push} = useHistory()
    
    const searchInput = (str) => {
        setSearchMeal(categoryMeal.filter(item => item.strMeal.toLowerCase().includes(str.toLowerCase())))
        push({
            pathname,
            search : `?search=${str}`
        })
    }
    
    useEffect(() =>{
        getFilterMeal(name).then(data => {
            setCategoryMeal(data.meals)
        })

        getFilterMeal(name).then(data => { 
            setSearchMeal(search ? data.meals.filter(item => item.strMeal.toLowerCase().includes(search.split("=")[1].toLowerCase())) : data.meals)
        })

    },[search])
    
   



   
    return (
        <div>
            <Search cb={searchInput}/>
            <CategoriesList categoryMeal={searchMeal}/>
        </div>
        )
}