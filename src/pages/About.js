import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./styles/home.css"
export default function About() {
    return ( 
         <div className="contact">
            <div className="contact_nav" >
                    <h3 className="contact_title">About Us</h3>
                    <span className="title_link text-light">
                        <Link to="/" className="title_link_" > Home </Link>
                        {'>'} About 
                    </span>
            </div>  

            <div className="contact_card  contact_card">
                <div className="card_about ">
                    <h1>Lorem Ipsum</h1>
                    <p>
                        This page is in the proccess
                      </p>
                </div>   
                


                
            </div>  
        </div>
    )
}