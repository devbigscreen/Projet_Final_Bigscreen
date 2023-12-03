import Navbar from "../components/Navbar";
import '../css/Home.css';

const Home = () => {
  return (
    <div role="region" className="homepage">
      <Navbar/>
      <div role="region">
        <h1>Bienvenue Admin !</h1>
      </div>
    </div>
  );
};

export default Home;
