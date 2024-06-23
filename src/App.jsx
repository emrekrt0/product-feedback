import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Content from "./Content"

function App() {
  return (
    <>
      <div className="mainContainer">
        <Header />
        <Content />
      </div>
    </>
  )
}

export default App
