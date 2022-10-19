import React from "react";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledProjects } from "../styles";
import Image from "next/image";

const projects = [
	{
		title: "Kanban-app",
		img: {
			href: "http://kanban-app-eight.vercel.app/",
			title: "Go to Live Demo",
			src: "/kanban-app.png",
			alt: "Kanban app",
		},
		description: "A full-stack kanban app built with Next.js, Express.js and Postgres.",
		stack: ["Typescript", "React.js", "Next.js", "Express.js", "Postgres", "Tailwindcss", "DaisyUI", "React Query"],
		extLinks: [
			{
				name: "Github",
				href: "https://github.com/androso/kanban-app",
				title: "Frontend source code",
				icon: faGithub,
			},
			{
				name: "Github",
				href: "https://github.com/androso/kanban-app-bk",
				title: "Backend source code",
				icon: faGithub,
			},
			{
				name: "Live Demo",
				href: "http://kanban-app-eight.vercel.app/",
				title: "Live Demo",
				icon: faExternalLinkAlt,
			}
		]
	},
	{
		title: "Timezoner v2",
		img: {
			href: "https://timezoner-liart.vercel.app/dashboard",
			title: "Go to Live Demo",
			src: "/timezoner-v2-cover.png",
			alt: "Timezoner v2 app",
		},
		description:
			"A small web app to help you organize events with friends from different timezones.",
		stack: [
			"React",
			"Typescript",
			"Firebase",
			"Cypress",
			"Tailwind",
			"React-hook-form",
		],
		extLinks: [
			{
				name: "Github",
				href: "https://github.com/androso/timezoner-v2",
				title: "Github source code",
				icon: faGithub,
			},
			{
				name: "Live Demo",
				href: "https://timezoner-liart.vercel.app/dashboard",
				title: "Live Demo",
				icon: faExternalLinkAlt,
			},
		],
	},
	// {
	// 	title: "Timezoner v1",
	// 	img: {
	// 		href: "https://timezoner.androsoa3.repl.co",
	// 		title: "Go to Live Demo",
	// 		src: "/timezoner-v1-cover.png",
	// 		alt: "Timezoner v1 app",
	// 	},
	// 	description:
	// 		"A small web app to help you organize events with friends from different timezones.",
	// 	stack: ["React", "Styled Components", "React-hook-form"],
	// 	extLinks: [
	// 		{
	// 			name: "Replit",
	// 			href: "https://replit.com/@androsoa3/timezoner",
	// 			title: "Replit source code",
	// 			icon: "/replit-gray.svg",
	// 		},
	// 		{
	// 			name: "Github",
	// 			href: "https://github.com/androso/timezoner",
	// 			title: "Github source code",
	// 			icon: faGithub,
	// 		},
	// 		{
	// 			name: "Live Demo",
	// 			href: "https://timezoner.androsoa3.repl.co",
	// 			title: "Live Demo",
	// 			icon: faExternalLinkAlt,
	// 		},
	// 	],
	// },
	{
		title: "Spotify Stats",
		img: {
			href: "https://youtu.be/ipCte18RoBc",
			title: "Live Demo",
			src: "/yourstats-cover.png",
			alt: "Spotify connected app",
		},
		description:
			"A simple-to-use web app that lets you see general stats about you, such as Top Artists, Top Tracks, Top Albums and your Playlists.",
		stack: [
			"Express",
			"React",
			"Spotify API",
			"Vite.js",
			"Replit",
			"Styled Components",
		],
		extLinks: [
			{
				name: "Replit",
				href: "https://replit.com/@androsoa3/yourstats",
				title: "Replit source code",
				icon: "/replit-gray.svg",
			},
			{
				name: "Github",
				href: "https://github.com/androso/yourstats",
				title: "Github source code",
				icon: faGithub,
			},
			{
				name: "Live Demo",
				href: "https://youtu.be/ipCte18RoBc",
				title: "Live Demo",
				icon: faExternalLinkAlt,
			},
		],
	},
	// {
	// 	title: "Quiz-time!!",
	// 	img: {
	// 		href: "https://quiz-time.androsoa3.repl.co/",
	// 		title: "Live Demo",
	// 		src: "/quiz-time-cover.png",
	// 		alt: "Quiz Time!! trivia game",
	// 	},
	// 	description:
	// 		"A fun trivia game that queries data from the opentriviadb, lets you pick the range of difficulty, genre of the questions and number.",
	// 	stack: ["Vanilla JS", "CSS", "Opendb API", "Replit"],
	// 	extLinks: [
	// 		{
	// 			name: "Replit",
	// 			href: "https://replit.com/@androsoa3/quiz-time",
	// 			title: "Replit source code",
	// 			icon: "/replit-gray.svg",
	// 		},
	// 		{
	// 			name: "Github",
	// 			href: "https://github.com/androso/quiz-app",
	// 			title: "Github source code",
	// 			icon: faGithub,
	// 		},
	// 		{
	// 			name: "Live Demo",
	// 			href: "https://quiz-time.androsoa3.repl.co/",
	// 			title: "Live Demo",
	// 			icon: faExternalLinkAlt,
	// 		},
	// 	],
	// },
	// {
	// 	title: "Hangman",
	// 	img: {
	// 		href: "https://hangman.androsoa3.repl.co/",
	// 		title: "Live Demo",
	// 		src: "/hangman-cover.png",
	// 		alt: "Hangman preview",
	// 	},
	// 	description:
	// 		"The classic Hangman game, now on browsers with keyboard support and sounds effect, built using react and the canvas API :)",
	// 	stack: ["React JS", "CSS", "Canva Api", "Vite.js", "Replit"],
	// 	extLinks: [
	// 		{
	// 			name: "Replit",
	// 			href: "https://replit.com/@androsoa3/hangman",
	// 			title: "Replit source code",
	// 			icon: "/replit-gray.svg",
	// 		},
	// 		{
	// 			name: "Github",
	// 			href: "https://github.com/androso/hangman",
	// 			title: "Github source code",
	// 			icon: faGithub,
	// 		},
	// 		{
	// 			name: "Live Demo",
	// 			href: "https://hangman.androsoa3.repl.co/",
	// 			title: "Live Demo",
	// 			icon: faExternalLinkAlt,
	// 		},
	// 	],
	// },
];

export default function Projects() {
	return (
		<StyledProjects className="projects" id="Projects">
			<div className="container">
				<h2 className="projects__title title">Projects</h2>
				<h3 className="projects__subtitle shadow-subtitle">
					Builders build, huh?
				</h3>
				{projects.map((project) => {
					return <Project key={project.title} project={project} />;
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
					rel="noreferrer"
					title={project.img.title}
					className="demo-screenshot"
				>
					<Image
						width="400px"
						height="240px"
						src={project.img.src}
						alt={project.title}
						className="screenshot"
					/>
				</a>
			</div>
			<div className="project__text-container">
				<h3 className="project__title">
					<a href={project.img.href} target="_blank" rel="noreferrer">
						{project.title}
					</a>
				</h3>
				<p className="project__description">{project.description}</p>
				<p className="project__stack">
					{project.stack.map((stack) => (
						<span className="stack__item" key={stack}>
							{stack}
						</span>
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
								key={extLink.title}
								rel="noreferrer"
							>
								{extLink.name === "Replit" ? (
									<Image
										id="replit-gray-icon"
										alt="replit"
										src={extLink.icon}
										layout="fill"
									/>
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
