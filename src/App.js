import "./App.css";
import backgroundImage from "./images/group-work/group-work-medium.jpg";
import comingSoonImage from "./images/coming-soon.png";

function App() {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    height: "100vh",
  };

  return (
    <div className="App" style={style}>
      <img className="Img-coming-soon" src={comingSoonImage} alt="background" />
    </div>
  );
}

export default App;
