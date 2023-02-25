import { breakpoints } from '@constants/index';
import { useMediaQuery } from '@mui/material';

const useBreakpoints = () => {
  const xs = useMediaQuery(breakpoints.xs);
  const xs2 = useMediaQuery(breakpoints.xs2);
  const sm = useMediaQuery(breakpoints.sm);
  const md = useMediaQuery(breakpoints.md);
  const lg = useMediaQuery(breakpoints.lg);
  const xl = useMediaQuery(breakpoints.xl);

  if (xs) {
    return 'xs';
  }
  if (xs2) {
    return 'xs2';
  }
  if (sm) {
    return 'sm';
  }
  if (md) {
    return 'md';
  }
  if (lg) {
    return 'lg';
  }
  if (xl) {
    return 'xl';
  }
};

export default useBreakpoints;
