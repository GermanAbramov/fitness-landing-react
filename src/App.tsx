import BenefitsSection from "./components/benefits/BenefitsSection";
import Home from "./components/home/Home";
import NavBar from "./components/nav/NavBar";
import ClassesSection from "./components/ourClasses/ClassesSection";

function App() {
    return (
        <div className="app text-browntxt bg-gray-100">
            <NavBar />
            <Home />
            <BenefitsSection />
            <ClassesSection />
        </div>
    );
}

export default App;
