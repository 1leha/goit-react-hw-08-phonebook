import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

// import styled from 'styled-components';

// export const LabelStyled = styled.label`
//   font-size: ${p => p.theme.fontSizes.m};

//   margin-bottom: 60px;
//   margin-left: ${p => p.theme.space[3]}px;
//   margin-right: ${p => p.theme.space[3]}px;
// `;

// export const InputStyled = styled.input`
//   width: 100%;

//   padding-top: ${p => p.theme.space[3]}px;
//   padding-bottom: ${p => p.theme.space[3]}px;
//   padding-left: ${p => p.theme.space[4]}px;
//   padding-right: ${p => p.theme.space[4]}px;

//   font-size: ${p => p.theme.fontSizes.m};

//   background-color: ${p => p.theme.colors.formBG};

//   border-radius: ${p => p.theme.radii.rounded};

//   border: none;
//   outline: none;

//   transition: ${p => p.theme.transitions.standart};

//   :focus {
//     box-shadow: ${p => p.theme.shadows.onFocus};
//   }
// `;

// export const ButtonStyled = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   width: 35px;
//   height: 35px;

//   padding-top: ${p => p.theme.space[0]}px;
//   padding-bottom: ${p => p.theme.space[0]}px;
//   padding-left: ${p => p.theme.space[0]}px;
//   padding-right: ${p => p.theme.space[0]}px;

//   margin-left: ${p => p.theme.space[0]}px;

//   font-size: ${p => p.theme.fontSizes.m};
//   border-radius: ${p => p.theme.radii.rounded};

//   background-color: transparent;
//   color: ${p => p.theme.colors.primary};

//   border: none;
//   outline: none;

//   transition: ${p => p.theme.transitions.standart};

//   :hover {
//     color: ${p => p.theme.colors.notification};
//   }
// `;
