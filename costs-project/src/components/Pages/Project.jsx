import styles from "./Project.module.css";

import { parse, v4 as uuidv4 } from "uuid";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../layout/Loading";
import Container from "../layout/Container";
import ProjectForm from "../project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../service/ServiceForm";
import ServiceCard from "../service/ServiceCard";

function Project() {
	const { id } = useParams();

	const [project, setProject] = useState([]);
	const [showProjectForm, setShowProjectForm] = useState(false);
	const [showServiceForm, setShowServiceForm] = useState(false);
	const [message, setMessage] = useState();
	const [type, setType] = useState();
	const [services, setServices] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			axios
				.get(`http://localhost:5000/projects/${id}`)
				.then((resp) => {
					setProject(resp.data);
					setServices(resp.data.services);
					console.log(resp.data);
				})
				.catch((err) => console.log(err));
		}, 300);
	}, [id]);

	function editPost(project) {
		//budget validation
		setMessage("");
		if (project.budget < project.cost) {
			setMessage(
				"O orçamento não pode ser menor que o custo do projeto!"
			);
			setType("error");
			return false;
		}

		axios
			.patch(`http://localhost:5000/projects/${project.id}`, project)
			.then((resp) => {
				setProject(resp.data);
				setShowProjectForm(!showProjectForm);
				setMessage("Projeto atualizado!");
				setType("success");
			})
			.catch((err) => console.log(err));
	}

	function createService(project) {
		setMessage("");
		//last service
		console.log(project);
		const lastService = project.services[project.services.length - 1];
		lastService.id = uuidv4();

		const lastServiceCost = lastService.cost;
		const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

		//maximum value validation
		if (newCost > parseFloat(project.budget)) {
			setMessage("Orçamento ultrapassado, verifique o valor do serviço");
			setType("error");
			project.services.pop();
			return false;
		}
		//add serviec cost to project total cost
		project.cost = newCost;

		//update project
		axios
			.patch(`http://localhost:5000/projects/${project.id}`, project)
			.then((resp) => {
				//exibir servicos
				setMessage("Serviço adicionado com sucesso!");
				setType("success");
				setShowServiceForm(false);
			})
			.catch((err) => console.log(err));
	}

	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm);
	}
	function toggleServiceForm() {
		setShowServiceForm(!showServiceForm);
	}

	function removeService(id) {}

	return (
		<>
			{project.name ? (
				<div className={styles.project_details}>
					<Container customClass="column">
						{message && <Message type={type} msg={message} />}
						<div className={styles.details_container}>
							<h1>Projeto: {project.name}</h1>
							<button
								onClick={toggleProjectForm}
								className={styles.btn}
							>
								{!showProjectForm ? "Editar Projeto" : "Fechar"}
							</button>
							{!showProjectForm ? (
								<div className={styles.project_info}>
									<p>
										<span>Categoria: </span>
										{project.category.name}
									</p>
									<p>
										<span>Total de Orçamento: </span>R$
										{project.budget}
									</p>
									<p>
										<span>Total Utilizado: </span>R$
										{project.cost}
									</p>
								</div>
							) : (
								<div className={styles.project_info}>
									<ProjectForm
										handleSubmit={editPost}
										btnText="Concluir edição"
										projectData={project}
									/>
								</div>
							)}
						</div>
						<div className={styles.service_form_container}>
							<h2>Adicione um serviço</h2>
							<button
								onClick={toggleServiceForm}
								className={styles.btn}
							>
								{!showServiceForm
									? "Adicionar serviço"
									: "Fechar"}
							</button>
							<div className={styles.project_info}>
								{showServiceForm && (
									<ServiceForm
										handleSubmit={createService}
										btnText="Adicionar Serviço"
										projectData={project}
									/>
								)}
							</div>
						</div>
						<h2>Serviços</h2>
						<Container customClass="start">
							{services.length > 0 &&
								services.map((service) => (
									<ServiceCard
										service={service}
										key={service.id}
										handleRemove={removeService}
									/>
								))}
							{services.length === 0 && (
								<p>Não há serviços cadastrados.</p>
							)}
						</Container>
					</Container>
				</div>
			) : (
				<Loading />
			)}
		</>
	);
}

export default Project;
