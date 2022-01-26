import "./App.css";

// import myApi from "../src/api/api";

// function App() {
//   // const [user, setUser] = useState('');

//   const getReq = async () => {
//     const { data } = await myApi.get("/users", {});
//     console.log(data);
//   };

//   return (
//     <div className="App">

//       <button onClick={getReq}>log all users</button>
//     </div>
//   );
// }

// export default App;
//import React, { Component } from "react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import UserRegister from "./components/UserRegister";
//import NotFound from "./NotFound";
function App() {
  return (
    <div className="app-main-container">
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/register" exact component={UserRegister} />

            {/* <Route component={NotFound} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
