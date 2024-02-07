// import Accordion from "./components/Accordion";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";

function App() {
  return (
    <div className="App">
      {/* <Accordion/> */}
      {/* <RandomColor/> */}
      <StarRating noOfStars={6}/>
    </div>
  );
}

export default App;
