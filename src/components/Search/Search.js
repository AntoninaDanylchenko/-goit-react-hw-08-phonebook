import { StyledInput } from 'components/styled/styledMui';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selector';

const Search = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    dispatch(addFilter(query.toLowerCase()));
  };
  const filter = useSelector(selectFilter);

  return (
    <StyledInput
      sx={{ width: '48ch', mr: 'auto', ml: 'auto' }}
      label="Find contacts by name"
      id="standard-search"
      type="search"
      variant="standard"
      name="filterContact"
      value={filter}
      onChange={e => onFilterChange(e.target.value)}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      autoComplete="off"
    />
  );
};

export default Search;
