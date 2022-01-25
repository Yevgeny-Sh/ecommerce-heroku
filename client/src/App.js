import "./App.css";

import myApi from "../src/api/api";

function App() {
  // const [user, setUser] = useState('');

  const getReq = async () => {
    const { data } = await myApi.get("/users", {});
    console.log(data);
  };
  return (
    <div className="App">
      {" "}
      Hello World!
      <button onClick={getReq}>get</button>
    </div>
  );
}

export default App;
