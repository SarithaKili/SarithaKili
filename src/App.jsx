import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar with the highest z-index */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Main content with a lower z-index */}
      <div className="relative z-10 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <div>
        <Contact />
        
        <StarsCanvas />
      
        </div>
       
      </div>

      
    </BrowserRouter>
  );
};

export default App;
