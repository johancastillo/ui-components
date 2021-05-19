import './App.css';
import Carousel from './components/Carousel';
import data from "./data.json"

function App() {
  return (
   <>
   
    <Carousel 
      title="Tecnología"
      link="https://compralotodo.com"
      products={data}
    />
    
   </> 
  )
}

export default App;
