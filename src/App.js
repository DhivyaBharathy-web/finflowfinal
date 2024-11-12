import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Dashboard from "./components/dashboard/Dashboard";
import Features from "./components/Features/features";
import Blog from "./components/benefits/Benefits";
import Contact from "./components/contact/Contact";
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from "./components/home/Home";
import SupportedConversions from "./components/SupportedConversations/SupportedConversions";
import ComingSoon from "./components/ComingSoon/ComingSoon"; // Import the ComingSoon component

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<CourseHome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/features" element={<Features />} />
        <Route path="/benefits" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/supported-conversions" element={<SupportedConversions />} />
        <Route path="/coming-soon" element={<ComingSoon />} /> {/* Add the new route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
