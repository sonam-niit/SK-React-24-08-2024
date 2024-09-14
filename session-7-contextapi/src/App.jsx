import { useContext } from "react"
import CounterParent from "./components/contextdemo/CounterParent"
import GrandParent from "./components/GrandParent"
import { ThemeContext } from "./context/ThemeContext"
import ThemeComponent from "./components/contextdemo/ThemeComponent";
import { CounterContext } from "./context/CounterContext";

function App() {
const {theme,toggleTheme}=useContext(ThemeContext);
const {count}=useContext(CounterContext);
  return (
    <div className="container m-2">
      <h3>Test {theme} {count}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <ThemeComponent />
      {/* <GrandParent /> */}
    </div>
  )
}

export default App
