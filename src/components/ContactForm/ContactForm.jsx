import React, { Component } from 'react';
import { Form, FormLabel, FormButton, FormInput} from './ContactForm.styled';



class ContactForm extends Component {
    state = {
      name: '',
      number: ''
  };
  

  handleChange = event => {
      const { name, value } = event.currentTarget;
      this.setState({ [name]: value });
  };

  //сабмитется вся форма
  handleSubmit = event => {
      event.preventDefault(); //что бы не перезагрузилась страница по умолчанию
     
      // Проп который передается форме(с App) для вызова при сабмите. предадим туда state
    //тепреь вне нашей формы, во время ее сабмита, получим доступ к ее данным  
    this.props.onSubmit(this.state);
      
      this.reset();
  }  

//метод для очистки формы, сбросим state в ноль
  reset = () => {
     this.setState({ name: '', number: '' });
  };

    render() {
      return (

        <Form onSubmit={this.handleSubmit}>
                
          <FormLabel htmlFor="name"> Name{' '}</FormLabel>
          <FormInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
           
          <FormLabel htmlFor="number"> Number{' '} </FormLabel>
          <FormInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
                
          <FormButton type="submit" >Add contact </FormButton>

        </Form>
      );
    }
};

export default ContactForm;