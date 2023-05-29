import "./styles/home.css"
import {Link} from "react-router-dom"
export default function Contact () {
    return (
        <div className="contact">
            <div className="contact_nav" >
                    <h3 className="contact_title">Contact</h3>
                    <span className="title_link text-light">
                        <Link to="/" className="title_link_" > Home </Link>
                        {'>'} Contact 
                    </span>
            </div>  

            <div className="contact_card d-flex justify-content-between">
                <div className="card_left ">
                    <ul className="card_title ">
                        <li className="list_title">Company name</li>
                        <li className="list_title">Adress</li>    
                        <li className="list_title"> Phone number</li>    
                        <li className="list_title"> Email</li>    
                        <li className="list_title"> Fax</li>    

                    </ul>    
                </div>   
                <div className="card_right">
                    <ul className=" card_info ">
                        <li>  Foody Co. </li>
                        <li> 677 Park Road, Berlin, Germany </li>
                        <li> +58 (007) 123 45 67</li>
                        <li> foodyberlin@gmail.com </li>
                        <li> berlinFoodCo 127 </li>
                        

                    </ul>
                
                    <p>There are links below to contact easily through social apps</p>
                
                </div>


                
            </div>  
        </div>
    )
}