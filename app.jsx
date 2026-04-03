import { useState } from "react";
import './app.css'
import Header from "./components/header";
import Footer from "./components/footer"
import Form from "./components/form"
import List from "./components/lists"
import Video from "./components/video"

function App() {
    return (
        <>
        <Header />
         <main>
            <List />
            <Video />
            <Form />
         </main>
         <Footer />
         </>
    )
}

export default App