import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav,Navbar,NavDropdown } from 'react-bootstrap'

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <Navbar bg="dark" variant='dark' sticky='top' expand='lg' collapseOnSelect>
		<Navbar.Brand>
			<img src={logo} width='40px' height='40px'/>{''}
		</Navbar.Brand>
		<Navbar.Toggle />
		<Navbar.Collapse>
			<Nav>
				<NavDropdown title="සාමාජිකත්වය">
					<NavDropdown.Item href="#">නව සාමාජික ලියාපදිංචිය</NavDropdown.Item>
					<NavDropdown.Item href="#"> යාවත්කාලින කිරීමට</NavDropdown.Item>
				</NavDropdown>		
				<Nav.Link href='funerals'>මරණාධාර</Nav.Link>			
				<NavDropdown title="ආදායම්">
					<NavDropdown.Item href="#">කාර්යාල ගාස්තු</NavDropdown.Item>
					<NavDropdown.Item href="#">මඩු පුටු</NavDropdown.Item>
				</NavDropdown>			
				<Nav.Link href='member_details'>සාමජිකත්ව පරික්ෂාව</Nav.Link>			
				<Nav.Link href='board_of'>නිලධාරී මණ්ඩලය</Nav.Link>			
				<Nav.Link href='about_us'>අපි ගැන</Nav.Link>			
			</Nav>
		</Navbar.Collapse>

	  </Navbar>
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
