import React from 'react';

import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Section = ({ title, children }) => (
  <>
    <Typography
      variant="h4"
      gutterBottom
      color="#494D5F"
      sx={{ textAlign: 'center' }}
    >
      {title}
    </Typography>
    {children}
  </>
);

Section.prototype = {
  title: PropTypes.string,
};

export default Section;
