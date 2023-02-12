import { useState } from "react"
import { FiLink } from "react-icons/fi"
import "./home.css"

import Menu from "../../components/menu/menu"
import LinkItem from "../../components/LinkItem/LinkItem"

import api from "../../services/api"
import {saveLink} from "../../services/StoreLinks"

const Home = () => {
  const [link, setLink] = useState("")
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

  async function handleShortLink(){

    try{
      const response = await api.post("/shorten", {
        long_url: link
      })

      setData(response.data)
      setShowModal(true)

      saveLink("@cutelink", response.data)

      setLink("")

    }catch{
      alert("Parece que algo deu errado")
      setLink("")
    }


  }

  return (
    <div className='container-home'>
      <div className='logo'>
        <h1>Links</h1>
        <span>Cole seu Link para encurtar!</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF"/>
          <input 
          placeholder="Cole seu Link aqui..."
          value={link} 
          onChange={(e)=> setLink(e.target.value)}/>

        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>
      <Menu/>

      {showModal && (
        <LinkItem 
        closeModal={() => setShowModal(false)}
        content={data}/>
      )}

    </div>
  )
}

export default Home