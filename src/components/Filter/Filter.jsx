import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {
  inputFilterReducer,
  clearFilterReducer,
} from '../../redux/filter/filterSlice';
import { sellectFilter } from '../../redux/filter/filter.selectors';
import SearchIcon from '@mui/icons-material/Search';

// icons
import { TiDelete } from 'react-icons/ti';

//components
import { Box } from '../Box';
import {
  LabelStyled,
  InputStyled,
  ButtonStyled,
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(sellectFilter);

  // Filter methods
  const handleChangeFilter = e => {
    dispatch(inputFilterReducer(e.currentTarget.value));
  };

  const clearFilter = () => {
    dispatch(clearFilterReducer());
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

  // return (
  //   <Box mb="4">
  //     <Box
  //       display="flex"
  //       alignItems="center"
  //       justifyContent="space-between"
  //       mt="2"
  //     >
  //       <InputStyled
  //         type="text"
  //         name="filter"
  //         id="filter"
  //         value={filter}
  //         onChange={handleChangeFilter}
  //       />

  //       <ButtonStyled
  //         type="button"
  //         aria-label="Clear filter"
  //         onClick={clearFilter}
  //       >
  //         <TiDelete size="36" />
  //       </ButtonStyled>
  //     </Box>
  //   </Box>
  // );
};

export default Filter;
