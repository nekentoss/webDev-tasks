import { Description } from '../Components/Description.jsx'
import './styles/styles.css'
import { Counter, RenderText, MountText, RenderList } from '../Components/Functions.jsx'
import styles from './styles/styles.module.css'

const App = () => {
    return (
        <div>
            <h1 className='header'>Site</h1>
            <div className={styles.content}>
                <Description title="Заголовок">
                    <div>
                        <hr />
                            <h2>Описание</h2>
                        <hr />
                        <p>Тут описание:</p>
                    </div>
                </Description>
            </div>
            <div className={styles.content}>
                <h1>Кнопки(useState)</h1>
                <h2>Счетчик</h2>
                <Counter/>
                <h2>Рендеринг текста</h2>
                <RenderText/>
            </div>
            ////////////////
            <br />
            <MountText/>
            ////////////////
            <br />
            <RenderList/>
        </div>
    )
}
export default App;