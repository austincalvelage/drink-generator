import './App.css';
import Header from './Header'
import DrinkCard from './DrinkCard'

function App() {
  return (
  <div className="bg-hero bg-cover h-screen flex flex-col items-center">
    <Header/>
    <div className="flex justify-center">
      <DrinkCard/>
    </div>
  </div>
  )
}

export default App;
