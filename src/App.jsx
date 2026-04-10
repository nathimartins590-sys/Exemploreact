import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/Header";
import Home from './pages/Home';
import About from './pages/About';
// import Footer from "./components/footer"
// import Form from "./components/form"
// import List from "./components/lists"
// import Video from "./components/video"

function App() {
    return (
        <>
        <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
         </Routes>
        {/* <Footer/> */}

         </>
    )
}

export default App