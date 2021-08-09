import { Contact, ContactItem, BtnDelete, Text } from './Contacts.styles';
import {RiDeleteBin5Line, RiUserHeartLine} from 'react-icons/ri';
// RiRestaurantLine
import * as actions from '../redux/contact/contact-actions';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../redux/contact/contact-selectors';


const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = (id) => dispatch(actions.deleteContact(id));
  return (
     <Contact>
    {contacts.map(({ id, name, number }) => (
      <ContactItem key={id}><RiUserHeartLine />
        <Text>{name}: {number}</Text>
        <BtnDelete onClick={() => onDeleteContact(id)}><RiDeleteBin5Line /></BtnDelete>
      </ContactItem>
    ))}
  </Contact>
  )
 
}

export default ContactList;
