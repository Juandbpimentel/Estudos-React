import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
			<Switch>
				<Container customClass="min-height">
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/company">
						<Company />
					</Route>
					<Route path="/newproject">
						<NewProject />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/project/:id">
						<Project />
					</Route>
				</Container>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
