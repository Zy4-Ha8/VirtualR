import { Camera } from "lucide-react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import FeatureSection from "./components/FeatureSection";
import WorkFlow from "./components/WorkFlow";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Landing />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;
