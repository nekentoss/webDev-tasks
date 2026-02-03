import Header from "../../components/Header.jsx"
import HeaderSecond from "../../components/HeaderSecond.jsx"
import Text from "../../components/Text.jsx"
import Wrapper from "../../components/Wrapper/Wrapper.jsx"
import '../../styles/style.css'
import styles from './styles.module.css'
import { useState } from "react"
import { useEffect } from "react"
import List from "../../components/List/List.jsx"
const App = () => {

    const [counter, setCounter] = useState(0)
    const [isTextVisible, setTextVisible] = useState(true)

// Проверка этапов рендеринга
    useEffect(() => {
        console.log("Монтирование")
    }, []);

    useEffect(() => {
        console.log("Обновление", counter)
    }, [counter]);

    useEffect(() => {
        if (!isTextVisible){
            console.log("Размонтирование")
        }
    }, [isTextVisible]);

// Функции для кнопки
    const onClick1 = (increment) => {
        if (increment) {
            setCounter(prev => prev + 1)
        } else {
            setCounter(prev => prev - 1)
        }
    }

    return (
        <div>
            <Wrapper>
                <Header className="header" title="Проект по React" />
                <HeaderSecond title1="1.Кнопка, вызывающая функцию" />
                <button onClick={() => onClick1(true)}>Увеличить</button>
                <button onClick={() => onClick1(false)}>Уменьшить</button>
                <button onClick={() => setCounter(0)}>Сброс</button>
                <hr />
                {counter}
                <hr />
                <HeaderSecond title1="2.Размонтирование объекта" />
                <button onClick={() => setTextVisible(false)}>Удалить строку</button>
                <button onClick={() => setTextVisible(true)}>Добавить строку</button>
                {isTextVisible && <Text>Это текст для демонстрации</Text>}
                <p className={styles.content}>Local style</p>
                <HeaderSecond title1="3.Список с условным рендерингом" />
                <List />
            </Wrapper>
        </div>
    )
}
export default App