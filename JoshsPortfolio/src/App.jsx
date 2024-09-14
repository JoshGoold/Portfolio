import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./Home"
import { Dashboard } from "./Dashboard"
import Resume from "./Resume"
import Contact from "./Components/Contact"
function App() {

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
          <BrowserRouter>
            <Routes>
              <Route index element={<Dashboard/>}/>
              <Route path="/portfolio" element={<Home/>}/>
              <Route path="/resume" element={<Resume/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </BrowserRouter>
        
    </div>
  )
}

export default App
