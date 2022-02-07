import styled from 'styled-components';

export const FilterLabel = styled.label`
display: block;
font-size: 18px;
font-weight: 600;
line-height: 1.17;
margin-left: 30px;
padding-bottom: 10px;
`

export const FilterInput = styled.input`
height: 25px;
padding-left: 10px;
margin-bottom: 20px;
border-radius: 5px;
border: 1px solid #21212133;
margin-left: 30px;

&:hover,
&:focus {
    outline: none;
    border-color: #21212133;
    box-shadow: 0 0 5px #21212133;
}
`