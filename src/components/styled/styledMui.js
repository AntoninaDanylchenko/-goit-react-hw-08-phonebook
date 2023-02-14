import {
  Button,
  Input,
  InputLabel,
  ListItemButton,
  styled,
} from '@mui/material';

export const ColorLinkButton = styled(ListItemButton)(() => ({
  width: '100px',
  display: 'flex',
  justifyContent: 'center',
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

export const StyledInput = styled(Input)({
  marginBottom: '32px',
  '&.MuiInput-underline:after': {
    borderBottomColor: '#8458B3',
  },

  '&.MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#8458B3',
    },
  },
});

export const StyledInputLable = styled(InputLabel)({
  '&.Mui-focused': {
    color: '#8458B3',
  },
});
