import Header from "./components/Header.jsx"
import Text from "./components/Text.jsx"
import Wrapper from "./components/Wrapper/Wrapper.jsx"
const App = () => {
    return (
        <div>
            <Wrapper>
                <Header title="Привет мир!" />
                <Text  text ="Что то что то" secText="dgdffgdfdfg"/>
            </Wrapper>
        </div>
    )
}
export default App