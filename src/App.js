import React, { Component } from "react";
import { Container } from "react-bootstrap"
import Routers from "./router";


class App extends Component {
  render() {
    return (
     
      <Routers />
      
      // <div>
      //   <nav className="navbar navbar-expand navbar-dark bg-dark">
      //     <a href="/outfits" className="navbar-brand">
      //       Fashionalyty
      //     </a>
      //     <div className="navbar-nav mr-auto">
      //       <li className="nav-item">
      //         <Link to={"/outfits"} className="nav-link">
      //           Outfits
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to={"/add"} className="nav-link">
      //           Add
      //         </Link>
      //       </li>
      //     </div>
      //   </nav>

      //   <div className="container mt-12">
      //     <h2>Add New Style</h2>
      //     <Switch>
      //       <Route exact path={["/", "/outfits"]} component={outfitsList} />
      //       <Route exact path="/add" component={Addoutfit} />
      //     </Switch>
      //   </div>
      // </div>
    );
  }
}

export default App;
