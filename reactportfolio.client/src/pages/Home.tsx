import Header from '../components/Home/Header';
import Hero from '../components/Home/Hero';
import Work from '../components/Home/Projects';
import About from '../components/Home/AboutMe';
import TechnicalToolbox from '../components/Home/TechnicalToolbox';
import Contact from '../components/Home/ContactMe';
import Footer from '../components/Home/footer';

const App: React.FC = () => {
    return (
        <div className="text-gray-900">
            <Header />
            <Hero />
            <Work />
            <TechnicalToolbox />
            <About />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;