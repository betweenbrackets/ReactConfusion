import React from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponents";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}
/* code on Muppala's screen
class App extends Component {
	render() {
    return (
      <div className='App'>
      <Navbar dark color ='primary'>
        <div className='container'>
        <NavbarBrand href = '/'>Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
      </div>
    );
  }
}
*/

export default App;
