import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Company from "./components/Pages/Company";
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import NewProject from "./components/Pages/NewProject";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/Pages/Projects";
import Project from "./components/Pages/Project";

function App() {
	return (
		<Router>
			<Navbar />
			<Container customClass="min-height">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="contact" element={<Contact />} />
					<Route path="company" element={<Company />} />
					<Route path="newproject" element={<NewProject />} />
					<Route path="projects" element={<Projects />} />
					<Route path="project/:id" element={<Project />} />
				</Routes>
			</Container>
			<Footer />
		</Router>
	);
}

export default App;
