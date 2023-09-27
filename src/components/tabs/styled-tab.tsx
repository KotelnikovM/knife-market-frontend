import { Tab, styled } from '@mui/material';

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  height: '100%',
  color: '#E8AA31',
  '&.Mui-selected': {
    color: '#E8AA31',
    outline: 0,
  },
  '&.Mui-focusVisible': {
    color: '#E8AA31',
  },
  ':active': {
    outline: 0,
  },
  ':hover': {
    color: '#E8AA31',
  },
}));

export default StyledTab;
