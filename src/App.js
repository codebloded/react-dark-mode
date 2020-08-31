import React ,{useState} from 'react';


import './App.css';

function App() {
  const [dark , setDark] = useState(false);
  const changeHandler = ()=>{
    setDark(!dark);
  }

  return (
    <div className={!dark?"App":"App dark-mode"}>
     <nav className="navbar customNav d-flex justify-content-center">
        <label class="switch">
            
            <input
             type="checkbox"
             onChange={changeHandler}
             />
            <span class="slider round"></span>
          
        </label>  
     </nav>

      <div className="content">
  <h1>Welcome to {dark?"Dark Mode":"Light Mode"}</h1>
        <h1>Hey! ,This is Codebloded!</h1>
        <h4>To switch into dark mode , click on the toogle button Above :)</h4>
        <button className="btn btn-primary"><a className="a " href="https://codebloded.github.io/weather-app/">Go to Weather App</a></button>

      </div>
    </div>
  );
}

export default App;
