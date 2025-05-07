import Sidebar from "./components/Sidebar"
import { Home, Experience, Works, Contact } from './sections/Sections'

function App() {
    return (
        <div className="h-screen w-screen">
            <Sidebar />
            <div id="home" className="ml-[25%] w-3/4 px-40 pt-20">
                <Home />
                <Experience />
                <Works />
                <Contact />
            </div>
        </div>
    )
}

export default App
