import "./error.css"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="container-error">
        <h1>Página não encontrada !</h1>

        <Link to="/">
            Voltar para Home
        </Link>

    </div>
  )
}

export default NotFound