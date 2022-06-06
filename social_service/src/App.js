import './App.css';

import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1> උතුරු බටුවිට සමාජ සේවා සංගමය  </h1>
      <h3>මිනිසාගේ පරම යුතුකම මිනිසාට සේවය කිරීමයි </h3>
      
      <div className='loginDetails'>
        <form>
          <div>
            <label>Username:</label>
              <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            
          </div>
          
          <div>
            <label>Password:</label>
              <input
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            
          </div>

          <div>
            
            <input id='login_submit' type="submit" value={"Submit"}/>
            
          </div>
          
          
        </form>
      </div>
      
    </div>

    
  );
}

export default App;
