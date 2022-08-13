import styled from "styled-components";
const StyledStack = styled.section`
	padding-top: var(--section-top-padding);
	.about__stack {
		display: grid;
		grid-template-columns: 1fr 1fr;
		@media (min-width: 400px) {
			grid-template-columns: repeat(3, 1fr);
		}
		list-style: none;
	}
	.stack__title {
		font-size: 2rem;
		text-align: center;
		margin-bottom: 2rem;
	}
	.about__stack__item {
		margin-bottom: 2rem;
		.item__name {
			margin-top: 0.8rem;
		}
		margin-right: 10px;
		text-align: center;
		display: flex;
		flex-direction: column;
	}
`;

export default StyledStack;
