import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home";
import { useLocation, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Researchers from "./pages/ResearchersPg";
import Students from "./pages/StudentsPg";
import DisplayDiagram from "./components/Engineers/DisplayDiagram";
import Engineers from "./components/Engineers/Engineers";
import PfdMaker from "./components/Engineers/PfdMaker";
import IncidentList from "./components/Engineers/IncidentList";

function App() {
    const location = useLocation();
    const noHeaderFooter = ["/admin/requests", "/admin", "/admin/researchers", "/login", "/signup" ];
    const hideHeaderFooter = noHeaderFooter.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header/>}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*
        <Route path="/engineers" element={<Engineers/>}></Route>
        
        
        <Route path="/discussion/create-post" element={<CreatePost />}></Route>
        <Route path="/admin/requests" element={<AdminRequests/>}></Route>
        <Route path="/admin/researchers" element={<AdminResearchers />}/> */}
        <Route path="/researchers" element={<Researchers/>} />
        <Route path="/student" element={<Students/>} />.        <Route path="/engineers/:substance/:diagram" element={<DisplayDiagram />} />
        <Route path="/engineers" element={<Engineers />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/engineers/pfd-maker" element={<PfdMaker />} />
                <Route path="/engineers/safety" element={<IncidentList />} />

      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  )
}

export default App
