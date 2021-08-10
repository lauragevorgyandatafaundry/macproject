import MacContainer from "./mac-main-container/MacContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiFillHeart } from "react-icons/ai";
import "./App.css";

function App() {
  return (
    <div>
      <MacContainer />
      <div className="navbar fixed-bottom d-flex justify-content-center">
        Կայքը պատրաստվել է ***-ի կողմից <AiFillHeart />
      </div>
    </div>
  );
}

export default App;
