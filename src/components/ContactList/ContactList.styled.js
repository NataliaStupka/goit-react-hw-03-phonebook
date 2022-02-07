import styled from 'styled-components';

export const ContactsMenu = styled.ul`
    margin-left: 30px;
   
    
`

export const ContactsItem = styled.li`
display: flex;
    width: 20%;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
        padding-bottom: 10px;
    }
`

export const ContactButton = styled.button`
cursor: pointer;
background-color: transparent;
border-radius: 5px;
border: 1px solid #00000070;

&:hover,
&:focus {
    box-shadow: 0 0 5px #00000070;
}
`