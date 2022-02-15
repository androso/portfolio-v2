import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledProjects } from "../styles";

const projects = [
	{
		title: "Quiz-time!!",
		img: {
			href: "https://quiz-time.androsoa3.repl.co/",
			title: "Live Demo",
			src: "/quiz-time-cover.png",
			alt: "Quiz Time!! trivia game",
		},
		description:
			"A fun trivia game that queries data from the opentriviadb, lets you pick the range of difficulty, genre of the questions and number.",
		stack: ["Vanilla JS", "CSS", "Opendb API", "Replit"],
		extLinks: [
			{
				name: "Replit",
				href: "https://replit.com/@androsoa3/quiz-time",
				title: "Replit source code",
				icon: "/replit-gray.svg",
			},
			{
				name: "Github",
				href: "https://github.com/androso/quiz-app",
				title: "Github source code",
				icon: faGithub,
			},
			{
				name: "Live Demo",
				href: "https://quiz-time.androsoa3.repl.co/",
				title: "Live Demo",
				icon: faExternalLinkAlt,
			},
		],
	},
];

export default function Projects() {
	return (
		<StyledProjects className="projects">
			<div className="container">
				<h2 className="projects__title title">Projects</h2>
				<h3 className="projects__subtitle shadow-subtitle">Builders build, huh?</h3>
				{projects.map((project) => {
					return (
						<Project project={project}/>
					);
				})}
			</div>
		</StyledProjects>
	);
}

function Project({ project }) {
	return (
		<div className="project__card">
			<div className="project__img-container">
				<a
					href={project.img.href}
					target="_blank"
					title={project.img.title}
				>
					<img src={project.img.src} alt={project.title} />
				</a>
			</div>
			<div className="project__text-container">
				<h3 className="project__title">
					<a href="https://quiz-time.androsoa3.repl.co/" target="_blank">
						{project.title}
					</a>
				</h3>
				<p className="project__description">{project.description}</p>
				<p className="project__stack">
					{project.stack.map((stack) => (
						<span className="stack__item">{stack}</span>
					))}
				</p>
				<div className="project__links-container">
					{project.extLinks.map((extLink) => {
						return (
							<a
								href={extLink.href}
								target="_blank"
								alt={extLink.title}
								title={extLink.title}
								className="blue-icon"
							>
								{extLink.name === "Replit" ? (
									<img id="replit-gra-icon" src={extLink.icon} />
								) : (
									<FontAwesomeIcon icon={extLink.icon} />
								)}
							</a>
						);
					})}
				</div>
				<div className="project__background"></div>
			</div>
		</div>
	);
}
