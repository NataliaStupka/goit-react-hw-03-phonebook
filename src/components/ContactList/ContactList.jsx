import PropTypes from "prop-types";
import { BsDot } from "react-icons/bs";
import { ContactsMenu, ContactsItem, ContactButton } from './ContactList.styled.js';

const ContactList = ({ options, onDeleteContact }) => {
   
    return (
        
            <ContactsMenu>
                {options.map(({ id, name, number }) =>
                    <ContactsItem key={id}><BsDot/>
                        {name}: {number}
                        <ContactButton
                            type="button"
                            onClick={() => onDeleteContact(id)}>
                            Delete
                        </ContactButton>
                    </ContactsItem>
                )
                }
            </ContactsMenu>
        
    );
};

ContactList.propTypes = {
    options: PropTypes.array,
    onDeleteContact: PropTypes.func.isRequired,
}




export default ContactList;


