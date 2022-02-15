import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
		<div className="container">
			<h2 class="projects__title title">Projects</h2>
			<h3 class="projects__subtitle shadow-subtitle">Builders build, huh?</h3>
			{projects.map((project) => {
				return (
					<div class="project__card">
						<div class="project__img-container">
							<a
								href={project.img.href}
								target="_blank"
								title={project.img.title}
							>
								<img src={project.img.src} alt={project.title} />
							</a>
						</div>
						<div class="project__text-container">
							<h3 class="project__title">
								<a href="https://quiz-time.androsoa3.repl.co/" target="_blank">
									{project.title}
								</a>
							</h3>
							<p class="project__description">{project.description}</p>
							<p class="project__stack">
								{project.stack.map((stack) => (
									<span className="stack__item">{stack}</span>
								))}
							</p>
							<div class="project__links-container">
								{project.extLinks.map((extLink) => {
									return (
										<a
											href={extLink.href}
											target="_blank"
											alt={extLink.title}
											title={extLink.title}
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
							<div class="project__background"></div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

function Project({ $image }) {
	return (
		<div class="project__card">
			<div class="project__img-container">
				<a
					href="https://quiz-time.androsoa3.repl.co/"
					target="_blank"
					title="Live Demo"
				>
					<img src="./img/quiz-time-cover.png" alt="Quiz Time!! trivia game" />
				</a>
			</div>
			<div class="project__text-container">
				<h3 class="project__title">
					<a href="https://quiz-time.androsoa3.repl.co/" target="_blank">
						Quiz-time!!
					</a>
				</h3>
				<p class="project__description">
					A fun trivia game that queries data from the opentriviadb, lets you
					pick the range of difficulty, genre of the questions and number.
				</p>
				<p class="project__stack">
					<span class="stack__item">Vanilla JS</span>
					<span class="stack__item">CSS</span>
					<span class="stack__item">Opendb API</span>
					<span class="stack__item">Replit</span>
				</p>
				<div class="project__links-container">
					<a
						href="https://replit.com/@androsoa3/quiz-time"
						target="_blank"
						alt="Replit source code"
						title="Replit source code"
					>
						<img id="replit-gray-icon" src="./img/replit-gray.svg" />
					</a>
					<a
						href="https://github.com/androso/quiz-app"
						target="_blank"
						title="source code on github"
					>
						<i class="fab fa-github gray-icon"></i>
					</a>
					<a
						href="https://quiz-time.androsoa3.repl.co/"
						target="_blank"
						title="Live Demo"
					>
						<i class="fas fa-external-link-alt gray-icon"></i>
					</a>
				</div>
				<div class="project__background"></div>
			</div>
		</div>
	);
}
