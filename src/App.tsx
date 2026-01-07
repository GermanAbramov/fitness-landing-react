import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";

function App() {
    return (
        <div className="app text-gray-500 bg-gray-100">
            <NavBar />
            <Home />
        </div>
    );
}

export default App;
