import { Button, ListItemButton, TextField, styled } from '@mui/material';

export const ColorLinkButton = styled(ListItemButton)(() => ({
  '&:hover': {
    borderRadius: `8px`,
    backgroundColor: 'rgba(132, 88, 179, 0.3)',
    color: '#e5eaf5',
  },
  '&.active': {
    backgroundColor: 'rgba(132,88,179, 0.5)',
    color: 'neutral.main',
    borderRadius: `8px`,
  },
}));

export const ColorButton = styled(Button)(() => ({
  color: 'inherit',
  padding: '5px',
  border: '1px solid rgb(132, 88, 179)',
  borderRadius: `8px`,
  '&:hover': {
    backgroundColor: `rgba(132, 88, 179, 0.5)`,
    color: `#fff`,
    border: `1px solid rgba(132, 88, 179, 0.5)`,
  },
}));

export const StyledInput = styled(TextField)({
  marginBottom: '32px',
  '& label.Mui-focused': {
    color: '#8458B3',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#8458B3',
  },
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#8458B3',
    },
  },
});
