import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    width: 98%;
    height: 100%;
    max-width: 1400px;
`;

export const Header = styled.div`
    width: 100%;
    font-size: 2.5rem;
    font-weight: bold;
    padding: 25px;  
    ${props => props.darkMode ? 'color: #eee;' : null}
    ${({ isChanging }) => isChanging ? `animation: .5s hideAndShow linear;` : null}

    i{
        padding: 0 10px;
        cursor: pointer;
        ${props => props.darkMode ? 'color: #eee;' : 'color: purple;'}
    }

    .fa-moon{      
        float: right;
        padding: 10px 50px 0 0;
        ${props => props.darkMode ? 'color: #eee;' : 'color: black;'}
    }

    .activeDay{
        width: 1.8rem;
        height: 1.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.6rem;
        padding: 10px;
        float: right;
        margin-right: 2rem;
        border-radius: 50%;
        transform: translateY(10%);
        animation: showDay .5s linear;
        ${props => props.darkMode ? `
            color: #eee;
            background: #222;
        ` : `
            color: black;
            background: #ab02c2;
        `}
    }

    @keyframes showDay {
        from {opacity: 0}
        to {opacity: 1}
      }

      @keyframes hideAndShow{
        0%{
           opacity: 1;
        }

        50%{
            opacity: 0;
        }

        100%{
           opacity: 1;
        }
    }  
`;