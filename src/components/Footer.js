import "./styles/main.css"

export default function Footer() {
    return(
        <div className="footer">
          <div className="container d-flex justify-content-between ">
                <div className="footer_info">
                    <h2 className="footer_title">
                        Best Chef
                    </h2>
                    <p className="description">
                        Delicious taste with us

                    </p>
                </div>
                <div className="footer_links">
                    <ul>
                        <h5>Easy contact </h5>
                        
                            <ul className="social_medias">
                                <a href="https://instagram.com/shermukhammadovich" className="social_media_icon"><i class="fa-brands fa-instagram" style={{"color": "#f500b4"}}></i></a>
                                <a href="https://t.me/abdugani0304" className="social_media_icon"><i class="fa-brands fa-telegram " style={{"color": "#3996f9"}}></i></a>
                                <li className="social_media_icon"><i class="fa-brands fa-youtube" style={{"color": "#c51616"}}></i></li>
                                <li className="social_media_icon"><i class="fa-brands fa-snapchat" style={{"color": "#efff14"}}></i></li>

                            </ul>

                    </ul>
                </div>
          </div>
                <p> { new Date().getFullYear()  } Copyright </p>
        </div>
        
        )
}