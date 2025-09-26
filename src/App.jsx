import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Toaster } from "sonner"

function App() {
  return (
    <>

      <BrowserRouter>
      {/* global toast */}
      <Toaster richColors position="bottom-right"/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
