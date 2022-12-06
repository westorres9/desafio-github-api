import Home from "./routes/Home";
import {BrowserRouter,Navigate, Route, Routes} from "react-router-dom";
import HomeBody from "./components/HomeBody";
import Search from "./routes/Search";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}>
            <Route index element={<Navigate to="/home"/>}/>
            <Route path="home" element={<HomeBody/>}/>
            <Route path="search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
