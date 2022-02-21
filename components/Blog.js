import React from "react";
import { StyledBlog } from "../styles";
// For now it's gonna be hardoced but in the future this should be
// uptaded with the last essays/articles of each blog
const technicalBlog = [];

const personalBlog = {
	src: "https://blog.androsoa3.repl.co/",
	blogs: [
		{
			id: 0,
			title: "On releasing pressure and the flow",
			date: "Jan 17 2022",
			abstract:
				"Just as i’m writing this i felt the call, I realized i had something to talk about, i felt the need to share...",
			href: "https://blog.androsoa3.repl.co/presure_flow"
		},
		{
			id: 1,
			title: "Reflecting on my journey of self-discovery",
			date: "Jan 18 2022",
			abstract:
				"Something i like to think is that I’m not 19 years old, not in the sense that...",
			href: "https://blog.androsoa3.repl.co/self-discovery"
		},
		{
			id: 2,
			title: "Realizing you're on the right path",
			date: "Feb 11 2022",
			abstract:
				"Something that's been worrying me for the last months is my fear of making the wrong decisions...",
			href: "https://blog.androsoa3.repl.co/being-right"
		},
		{
			id: 3,
			title: "On re-building self-confidence",
			date: "Feb 13 2022",
			abstract:
				"If we talk on a regular basis you might already know how much my self-confidence has decreased in the last months...",
			href: "https://blog.androsoa3.repl.co/confidence"
		},
	]
}

export default function Blog() {
	return (
		<StyledBlog id="Blog">
			<div className="container">
				
				<BlogFeed
					
					title="My Garden of Words"
					subtitle="Essays of a life explorer"
					type="Essays"
					blog={personalBlog} 
				/>
			</div>
		</StyledBlog>
	);
}

function BlogFeed({ blog, title, subtitle, type}) {
	return (
		<>
			<h2 className="title">
				<a href={blog.src} target="_blank" alt={Blog.src} rel="noreferrer">
					{title}
				</a>
			</h2>
			<h3 className="shadow-subtitle">{subtitle}</h3>
			<div className="feed-head">
				<p className="featured-text">
					<a href={blog.src} target="_blank" rel="noreferrer" alt={Blog.src}>
						Featured {type}
					</a>
				</p>
				<span className="line-divider"></span>
			</div>
			{blog.blogs.map(post => {
				return (
					<div className="blog__post" key={post.id}>
							<p className="shadow-subtitle date">{post.date}</p>
							<div className="blog__main-data">
								<h4 className="blog__title">
									<a href={post.href} alt={post.title} target="_blank" rel="noreferrer">
										{post.title}
									</a>
								</h4>
								<p className="blog__description ">{post.abstract}</p>
							</div>
					</div>
				)
			})}
		</>
	);
}
