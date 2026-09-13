import { Suspense, useState } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import type { ITech } from "./types/tech"
import { ToastContainer } from "react-toastify"

const dataFetch = async () : Promise<ITech[]> =>{
  const res = await fetch('/technologies.json')
  const data = await res.json()
  return data
}
const dataPromise = dataFetch();

function App() {
  const[addToStack, setAddToStack] = useState<ITech[]>([])
  return (
    <>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="container mx-auto p-2">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-center md:text-left">Explore the <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span></h1>
        <p className="text-gray-500 my-4 text-center md:text-left">Pick one technology per category to build your ideal stack.</p>
      </div>
      <Suspense fallback={<div className="text-center font-semibold text-xl">Loading Stacks...</div>}>
        <Technologies dataPromise={dataPromise} addToStack={addToStack} setAddToStack={setAddToStack} ></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
