import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';  //Formik-это обертка, Form-форма, Field-инпут, ErrorMessage-ошибка
import * as yup from 'yup';
import {ErrorText, ContainerFormik} from './FormikForm.styled'
import styled from 'styled-components';


const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];



const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

//валидация
const validationSchema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});
//начальные значения 
const initialValues = {
  name: '',
  number: ''
};


class FormikForm extends Component {
  
                  // (values, actions)-values то, что введем в форме; actions - заменим на методы, например ресет(очистка поля после сабмит)
  handleSubmit = (values, { resetForm }) => {
      console.log(values);
          resetForm();
    }

    render() {
        return (
         <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
                onSubmit={this.handleSubmit}>
<ContainerFormik>
          <Form >
                        <div >
                            <h2> FormikForm</h2>
              <label htmlFor="name"> Name </label>
              <div>
                  {/* Fild передаем все необходимые пропсы */}
                <Field
                  name='name'
                  type='text'
                  placeholder=''
                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"    
              />
                <FormError name="name" />
              </div>
            </div>
            <div>
              <label htmlFor=""> Number </label>
              <div>
                <Field
                  name="number"
                  type="tel"
                  placeholder=''
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                   />
                <FormError name="number" />
              </div>
              
            </div>
            <button type='submit'>Add contact</button>
          </Form>
</ContainerFormik>
        </Formik>
    )

}
};

export default FormikForm;