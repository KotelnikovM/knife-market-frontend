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

  color: '#E8AA31',
  '&.Mui-selected': {
    color: '#E8AA31',
    border: 0,
  },
  '&.Mui-focusVisible': {
    color: '#E8AA31',
    border: 0,
  },
}));

export default StyledTab;
