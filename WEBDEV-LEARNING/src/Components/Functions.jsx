import { useState, useEffect } from "react"
import styles from "./styles.module.css"
////////////////////////////////////////////////////////////////
export const Counter = () =>{
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <button onClick={() => setCounter((prev) => prev + 1)}>Увеличить</button>
            <button onClick={() => setCounter((prev) => prev - 1)}>Уменьшить</button>
            <hr />
            {counter}
            <hr />
        </div>
    )
}

export const RenderText = () =>{
    const [isRenderText, setRenderText] = useState(true)
    return (
        <div>
            <button onClick={() => setRenderText(true)}>Показать текст</button>
            <button onClick={() => setRenderText(false)}>Убрать текст</button><br />
            {isRenderText && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo ut praesentium cum beatae accusantium vel quaerat ipsa ad incidunt! Natus dolor, reiciendis nemo voluptate omnis totam eius! Vitae, alias.</p> }
        </div>
    )
}

////////////////////////////////////////////////////////////////////////
const Mounted = ({onMount, onUnmount}) => {
        useEffect(() => {
            onMount()
            return () => {
                onUnmount()
            };
        }, [])
        return <p>Проверка размонтирования</p>
    }

export const MountText = () =>{
    
    const [MountText, setMountText] = useState(true)
    const [MountCounter, setMountCounter] = useState(0)
    const [UnmountCounter, setUnmountCounter] = useState(0)

    return(
        <>
            <button onClick={() => setMountText(true)}>Монтировать</button>
            <button onClick={() => setMountText(false)}>Размонтировать</button>
            {MountText && 
                <Mounted
                    onMount={() => setMountCounter(MountCounter => MountCounter + 1)}
                    onUnmount={() => setUnmountCounter(UnmountCounter => UnmountCounter + 1)}
                />
            }
            <p>Текст монтирован {MountCounter} раз</p>
            <p>Текст размонтирован {UnmountCounter} раз</p>
        </>
    )

}

///////////////////////////////////////////////////////////////////////////////

export const RenderList = () => {
    const [ShowEmoji, setShowEmoji] = useState(true);
    const ChangeFunc = () => {
        {ShowEmoji ? setShowEmoji(false) : setShowEmoji(true)}
    }
    const fruits = [
        { key: 1, name: 'Банан', emoji: '🍌' },
        { key: 2, name: 'Яблоко', emoji: '🍎' },
        { key: 3, name: 'Апельсин', emoji: '🍊' },
        { key: 4, name: 'Виноград', emoji: '🍇' },
        { key: 5, name: 'Клубника', emoji: '🍓' },
        { key: 6, name: 'Арбуз', emoji: '🍉' },
        { key: 7, name: 'Лимон', emoji: '🍋' },
        { key: 8, name: 'Персик', emoji: '🍑' },
        { key: 9, name: 'Ананас', emoji: '🍍' },
        { key: 10, name: 'Вишня', emoji: '🍒' }
    ];

    return(
        <div className={styles.picture}>
            <button onClick={ChangeFunc}>{ShowEmoji ? 'Скрыть эмодзи' : 'Показать эмодзи'}</button>
            <ul>
                {fruits.map((item) => (
            <li key={item.key}>
                {item.name}
                {ShowEmoji && item.emoji}
            </li>  
            ))} 
            </ul>  
        </div>
    );

}