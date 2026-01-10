import BenefitsSection from "./components/benefits/BenefitsSection";
import ContactsSection from "./components/contacts/ContactsSection";
import Footer from "./components/footer/Footer";
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
            <ContactsSection />
            <Footer />
        </div>
    );
}

export default App;
