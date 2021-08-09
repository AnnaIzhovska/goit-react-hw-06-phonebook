import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactFrom';
import ContactList from './Contacts';
import Container from './Container';
import Filter from './Filter';
import { RiContactsLine } from 'react-icons/ri';

export default function App() {
  
  return (
    <Container title='Phonebook'>
      <ToastContainer autoClose={3000} />
      <ContactForm/>
      <h2> <RiContactsLine /> Contacts</h2>
      <Filter/>
      <ContactList/>     
    </Container>
  )
}
