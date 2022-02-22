import styled from 'styled-components';

const StyledHero = styled.section`
    height: calc(100vh - 66px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    
    .avatar {
        width: 203px;
        height: 203px;
        display: inline-block;
        border-radius: 50%;
        position: relative;
    }
    .avatar .image {
        border-radius: 50%;
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
    .blue-icon:first-child {
        margin-left: 0;
    }
    .replit-blue-icon {
        position: relative;
    }
    #replit-blue-icon {
        display: flex;
    }
    .blue-icon svg {
        height: 25px !important;
    }
    .blue-icon.fa-chevron-down {
        color: #cccccc;
        font-size: 1.8rem;
        transition: color .3s ease;
    }
    .blue-icon.fa-chevron-down:hover {
        color: var(--outstanding-text);
    }
    .blue-icon:hover {
        opacity: 1;
        color: #93dfc8;
    }

    @media (max-height: 500px) {
        height: auto;
    }


`;

export default StyledHero;