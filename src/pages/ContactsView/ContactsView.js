import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selector';
import Search from 'components/Search/Search';
import Phonebook from 'components/Phonebook/Phonebook';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import { Box } from '@mui/material';

const ContactsView = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Section title="Phonebook" style={{ border: '1px solid #494D5F' }}>
        <Phonebook />
      </Section>
      {isLoading && !error && <b>Request in progress...</b>}
      <Section title="Contacts">
        <Search />
        <Contacts />
      </Section>
    </Box>
  );
};

export default ContactsView;
