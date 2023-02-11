import { Box } from '@mui/material';
import Section from 'components/Section/Section';
import { ContactPhoneTwoTone } from '@mui/icons-material';

const HomeView = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pt: '32px',
        flexDirection: 'column',
      }}
    >
      <Section title="Task manager welcome page">
        {/* <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span> */}
        <ContactPhoneTwoTone fontSize="large" htmlColor="#8458B3" />
      </Section>
    </Box>
  );
};
export default HomeView;
