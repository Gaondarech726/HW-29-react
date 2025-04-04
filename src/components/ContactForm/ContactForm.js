import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.inputWrapper}>
        <input className={css.field} type="text" name="text" placeholder=" " />
        <label className={css.label}>Enter contact...</label>
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
};
