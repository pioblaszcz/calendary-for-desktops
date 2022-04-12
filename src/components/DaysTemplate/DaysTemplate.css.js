import styled from 'styled-components';

export const Template = styled.div`
    height: 85vh;

    .days{
        display: flex;
        height: 5%;
        justify-content: space-between;

        .day{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            ${props => props.darkMode ? 'color: white;' : 'color: #222;'}
            flex: 1;
            font-weight: bold;
            font-size: 1.2rem;
            text-align: center;
            border-left: 2px solid lightgray;

            &:last-child{
            border-right: 2px solid lightgray;
            }
        }
    }
`;