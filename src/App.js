import { useState, useRef } from "react"
import './Styles/global.scss'
import './Styles/container.scss'

const App = () => {
  const [suka, setSuka] = useState('')
  const inputRef = useRef(null)
  const [list, setList] = useState([])

  const addTodo = () => {
    if (suka.trim() !== '') {
      setList([...list, suka]);
      setSuka('');
    }
  }
  return (
    <>
    <div className="text">
      <h1 className="text__big__text">Hello, this is your toDo</h1>
      </div>
      <div className="container">
      <input className="container__input" ref={inputRef} value={suka} onChange={(e) => setSuka(e.target.value)} type='text'/>
      <button className="container__button" onClick={addTodo}>Add</button>
     <ul className="container__min__text">
        {list.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
     </ul>
      </div>
 </>
  )
}

export default App