import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selector';
import Search from 'components/Search/Search';
import Phonebook from 'components/Phonebook/Phonebook';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <main>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
      <Section title="Contacts">
        <Search />
        <Contacts />
      </Section>
    </main>
  );
};

export default ContactsView;
