import styled from 'styled-components';

export const DayCell = styled.div`
    position: relative;
    width: 14.2%;
    height: 16.4%;
`;

export const DayStyle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%, -50%);
    transition: .2s;
    ${props => props.darkMode ? `
        background: grey;
        box-shadow: 4px 4px 6px 0px #ddd;
        &:hover{
            background: #d3d3d3;
        }
    ` : `
        background: #f5f5f5;
        box-shadow: 4px 4px 6px 0px rgba(66, 68, 90, 1);
        &:hover{
            box-shadow: 4px 4px 6px 3px rgba(66, 68, 90, 1);
        }
    `}
    cursor: pointer;
    border-radius: 10px;

    p{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1.3rem;
        ${props => props.inMonth ? 'color: black;' : 'color: lightgray;'}
        ${(props) => props.active && props.inMonth ?
        `
            padding: .6rem;
            font-size: 1.4rem;
            ${props.darkMode ? `background: #222; color: #eee;` : 'background: #ab02c2'};
            border-radius: 50%;

            transform: translate(-50%, -.6rem);
        `
        : null}
    }
`;