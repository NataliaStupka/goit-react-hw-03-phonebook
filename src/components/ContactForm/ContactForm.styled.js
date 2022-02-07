import styled from 'styled-components';

export const Form = styled.form`
margin-top: 20px;
margin-left: 30px;
margin-bottom: 30px;
display: flex;
flex-direction: column;
border: solid 2px #21212133;
border-radius: 5px;
box-shadow: 0 0 5px #21212133;
padding: 20px;
width: 20%;

`

export const FormLabel = styled.label`
font-size: 18px;
font-weight: 600;
line-height: 1.17;
padding: 10px 0px;
`
export const FormInput = styled.input`
height: 40px;
padding-left: 10px;
border-radius: 5px;
border: 1px solid #21212133;

&:hover,
&:focus {
    outline: none;
    border-color: #21212133;
    box-shadow: 0 0 5px #21212133;
}
`

export const FormButton = styled.button`
margin-top: 20px;
padding: 5px;
cursor: pointer;
background-color: #3a2bbb;
color: white;
width: 50%;
border: none;
border-radius: 10px;

&:hover,
&:focus {
    box-shadow: 0 0 5px #3a2bbb;
}
`