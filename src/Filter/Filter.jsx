import { Input } from '../ContactFrom/ContactForm.styles';
import { Text } from './Filter.styles';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../redux/contact/contact-selectors.js';
import * as actions from '../redux/contact/contact-actions';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChange = (e) => dispatch(actions.changeFilter(e.target.value));
    return (
        <>
        <Text>Find contacts by name</Text>
            <Input
                type="text"
                name="name"
                placeholder="Name to search"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                value={value}
                onChange={onChange}
                required/>  
        </>
    )
}

export default Filter;