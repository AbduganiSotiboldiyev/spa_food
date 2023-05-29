import { useState } from "react"
import "./categories.css"

export default function Search({cb = Function.prototype}) {

    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if(e.key ==="Enter") {
           return handleSearch()
        }
    }

    const handleSearch = () => {
        cb(value)
    }

    return(

         <div className="container search d-flex justify-content-around">
            <input 
            type="search" 
            placeholder="search" 
            className="form-control" 
            onKeyDown={handleKey} 
            onChange={(e) => setValue(e.target.value) } 
            value={value}>
            </input>
            <button className="btn btn-danger d-inline text-light">search</button>
         </div>
                    
    )
}