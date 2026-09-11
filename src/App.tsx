import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Technologies from "./components/Technologies"
import type { ITech } from "./types/tech"

const dataFetch = async () : Promise<ITech[]> =>{
  const res = await fetch('/technologies.json')
  const data = await res.json()
  return data
}
const dataPromise = dataFetch();

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Technologies dataPromise={dataPromise}></Technologies>
    </>
  )
}

export default App
