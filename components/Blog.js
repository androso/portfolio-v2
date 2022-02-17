import React from "react";
import { StyledBlog } from "../styles";
// For now it's gonna be hardoced but in the future this should be
// uptaded with the last essays/articles of each blog
const technicalBlog = [];

const personalBlog = [
	{
		id: 0,
		title: "On releasing pressure and the flow",
		date: "Jan 17 2022",
		abstract:
			"Just as i’m writing this i felt the call, I realized i had something to talk about, i felt the need to share...",
	},
	{
		id: 1,
		title: "Reflecting on my journey of self-discovery",
		date: "Jan 18 2022",
		abstract:
			"Something i like to think is that I’m not 19 years old, not in the sense that...",
	},
	{
		id: 2,
		title: "Realizing you're on the right path",
		date: "Feb 11 2022",
		abstract:
			"Something that's been worrying me for the last months is my fear of making the wrong decisions...",
	},
	{
		id: 3,
		title: "On re-building self-confidence",
		date: "Feb 13 2022",
		abstract:
			"If we talk on a regular basis you might already know how much my self-confidence has decreased in the last months...",
	},
];

export default function Blog() {
	return (
		<StyledBlog>
			<div className="container">
				
				<BlogFeed 
					title="My Garden of Words"
					subtitle="Essays of a life explorer"
					blog={personalBlog} 
				/>
			</div>
		</StyledBlog>
	);
}

function BlogFeed({ Blog, title, subtitle}) {
	return (
		<>
			<h2 className="title">{title}</h2>
			<h3 className="shadow-subtitle">{subtitle}</h3>
			<div className="feed-head">
				<p className="featured-text">Featured Articles</p>
				<span className="line-divider"></span>
			</div>
			{personalBlog.map(post => {
				return (
					<div className="blog__post" key={post.id}>
						<p className="shadow-subtitle date">{post.date}</p>
						<div className="blog__main-data">
							<h4 className="blog__title">{post.title}</h4>
							<p className="blog__description">{post.abstract}</p>
						</div>
					</div>
				)
			})}
		</>
	);
}
