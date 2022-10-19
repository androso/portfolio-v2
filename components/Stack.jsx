import Image from "next/image";
import React from "react";
import StyledStack from "../styles/StyledStack";

const stackItems = [
	{
		name: "Javascript",
		img: {
			title: "JS",
			src: "/js-svgrepo-com.svg",
			alt: "Javascript logo",
		},
	},
	{
		name: "Typescript",
		img: {
			title: "TS",
			src: "/typescript-logo-svgrepo-com.svg",
			alt: "Typescript logo",
		},
	},
	{
		name: "Tailwindcss",
		img: {
			title: "tailwindcss",
			src: "/tailwind-svgrepo-com.svg",
			alt: "Tailwindcss logo",
		},
	},
	{
		name: "React.js",
		img: {
			title: "React.js icon",
			src: "/react-svgrepo-com.svg",
			alt: "React logo",
		},
	},
	{
		name: "Next.js",
		img: {
			title: "Next.js icon",
			src: "/nextjs-svgrepo-com.svg",
			alt: "Next.js logo",
		},
	},
	{
		name: "Node.js",
		img: {
			title: "Node.js icon",
			src: "/nodejs-icon-svgrepo-com.svg",
			alt: "Node.js logo",
		},
	},
	{
		name: "Express.js",
		img: {
			title: "Express.js icon",
			src: "/express-svgrepo-com.svg",
			alt: "Express.js logo",
		},
	},
	// {
	// 	name: "Firebase",
	// 	img: {
	// 		title: "Firebase",
	// 		src: "/firebase-svgrepo-com.svg",
	// 		alt: "Firebase logo",
	// 	},
	// },
	{
		name: "Postgres",
		img: {
			title: "Postgresql",
			src: "/Postgresql_elephant.svg",
			alt: "Postgres logo",
		},
	},
	{
		name: "Typeorm",
		img: {
			title: "Typeorm ORM",
			src: "/typeorm.svg",
			alt: "Typeorm logo",
		},
	},
	{
		name: "Git",
		img: {
			title: "Git icon",
			src: "/git-icon-svgrepo-com.svg",
			alt: "Git logo",
		},
	},
	{
		name: "Cypress",
		img: {
			title: "Cypress icon",
			src: "/cypress-svgrepo-com.svg",
			alt: "Cypress logo",
		},
	},
];

export default function Stack() {
	return (
		<StyledStack className="stack" id="Stack">
			<div className="container">
				<p className="stack__title title">My Stack</p>
				<ul className="about__stack">
					{stackItems.map((itemData) => (
						<li key={itemData.name} className="about__stack__item">
							<span style={{ width: "72px", height: "72px", margin: "auto" }}>
								<Image
									src={itemData.img.src}
									alt={itemData.img.alt}
									title={itemData.img.title}
									width="72"
									height="72"
								/>
							</span>
							<span className="item__name">{itemData.name}</span>
						</li>
					))}
				</ul>
			</div>
		</StyledStack>
	);
}
