import RegisterForm from 'components/RegisterForm/RegisterForm';
import Section from 'components/Section/Section';
import { Helmet } from 'react-helmet';

const RegisterView = () => {
  return (
    <>
      <Helmet>
        <title>register</title>
      </Helmet>
      <Section title="Sing Up">
        <RegisterForm />
      </Section>
    </>
  );
};

export default RegisterView;
