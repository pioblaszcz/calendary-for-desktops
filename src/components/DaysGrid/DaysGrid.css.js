import styled from 'styled-components';

export const DaysWrapper = styled.div`
    margin-top: 1vh;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 92%;
    ${({ isChanging }) => isChanging ? `animation: .5s hideAndShow linear;` : null}
    
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
