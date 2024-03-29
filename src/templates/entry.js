import React from 'react';
import { graphql } from 'gatsby';
import Sidebar from '../components/sidebar';
import './entry.css';

export default function Template({ data }) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	return (
		<div className="blog-post-container">
			<Sidebar />
			<div className="blog-post">
				<h1>{frontmatter.title}</h1>
				<div
					className="blog-post-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</div>
	);
}
export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
			}
		}
	}
`;
