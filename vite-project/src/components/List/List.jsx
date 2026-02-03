import { useState } from "react"
import list from './list.module.css'
import image from './img/cat.png'
const fruits = [
  {id: 1, name: 'Яблоко'},
  {id: 2, name: 'Апельсин'},
  {id: 3, name: 'Банан'},
  {id: 4, name: 'Арбуз'},
  {id: 5, name: 'Лимон'},
  {id: 6, name: 'Груша'}
]


const List = () => {
  const [isIdVisible, setIdVisible] = useState(true)  
  if (fruits.length === 0) {
    return null;
  }  
  return (
    <>
        <ul>
        {fruits.map(item => (
            <li key={item.id}>
                {isIdVisible ? `${item.id}: ` : null}
                { }
                {item.name}
            </li>
        ))}
        </ul>
        <button onClick={() => setIdVisible(false)}>удалить ID</button>
        <button onClick={() => setIdVisible(true)}>показать ID</button>
        <h2>background</h2>
        <div className={list.picture}></div>
        <h2>через img</h2>
        <img src={image} alt="" />
    </>
    
  )
}

export default List;