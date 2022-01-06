import './App.css';
import logo from './EuropeanJake.png'

function fun(){
alert('Coming Soon!')
}




function App() {
  return (
    <div className="App">
      <header><img src={logo} alt={'european jake logo'} onClick={()=>fun()}/></header>
    </div>
  );
}

export default App;
