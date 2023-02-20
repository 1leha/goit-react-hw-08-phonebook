import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { inputFilterReducer } from '../../redux/filter/filterSlice';
import { sellectFilter } from '../../redux/filter/filter.selectors';
import SearchIcon from '@mui/icons-material/Search';

// icons

//components
import { Search, SearchIconWrapper, StyledInputBase } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(sellectFilter);

  // Filter methods
  const handleChangeFilter = e => {
    dispatch(inputFilterReducer(e.currentTarget.value));
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={filter}
        onChange={handleChangeFilter}
      />
    </Search>
  );
};

export default Filter;
