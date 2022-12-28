import { useState } from 'react';
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';

const Phonebook = ({ onSubmitProp }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    setId(nanoid());
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmitProp(id, name, number);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={css.phonebookForm}>
      <label htmlFor="nameInputId" className={css.phonebookLabel}>
        Name
        <input
          type="text"
          name="name"
          value={name}
          id="nameInputId"
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          className={css.phonebookInput}
          required
        />
      </label>
      <label htmlFor="numberInputId" className={css.phonebookLabel}>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id="numberInputId"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          className={css.phonebookInput}
          required
        />
      </label>
      <button type="submit" className={css.phonebookSubmit}>
        Add contact
      </button>
    </form>
  );
};

export default Phonebook;
