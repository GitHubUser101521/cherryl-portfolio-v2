import Sidebar from "./components/Sidebar"
import { Home, Experience, Works, Contact } from './sections/Sections'

function App() {
    return (
        <div className="h-screen w-screen">
            <Sidebar />
            <div id="home" className="md:ml-[25%] md:w-3/4 px-10 md:px-20 lg:px-40 pt-20">
                <Home />
                <Experience />
                <Works />
                <Contact />
            </div>
        </div>
    )
}

export default App
