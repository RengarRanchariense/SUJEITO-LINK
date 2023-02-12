import "./menu.css"
import { BsYoutube, BsInstagram } from "react-icons/bs"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="menu">
        <a href="#" className="social"><BsYoutube color="#FFF" size={24}/></a>
        <a href="#" className="social"><BsInstagram color="#FFF" size={24}/></a>
        <Link to="/links" className="menu-item">
            Meus Links
        </Link>
    </div>

  )
}

export default Menu