import styled from 'styled-components';

const StyledHero = styled.section`
    color: red;
    height: calc(100vh - 66px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    
    .avatar {
        width: 203px;
        border-radius: 50%;
    }
    .title {
        color: var(--outstanding-text);
        font-weight: 500;
        font-size: 2.66rem;
    }
    .profession {
        color: var(--outstanding-shadow-text);
        margin-bottom: var(--sm-margin-bottom);
        font-weight: 400;
        text-align: center;
    }
    .landing__social-links {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: var(--md-margin-bottom);
    }
    .blue-icon {
        width: 25px;
        height: 25px;
        margin-left: 20px;
        cursor: pointer;
        color: var(--outstanding-shadow-text);
        opacity: 0.9;
        transition: opacity 0.3s ease;
    }
    .blue-icon:first-child {
        margin-left: 0;
    }
    #replit-blue-icon {
        display: flex;
    }
    .blue-icon.fa-chevron-down {
        color: #cccccc;
        font-size: 1.8rem;
    }
    .blue-icon.fa-chevron-down:hover {
        color: var(--outstanding-text);
    }
    .blue-icon:hover {
        opacity: 1;
    }

`;

export default StyledHero;