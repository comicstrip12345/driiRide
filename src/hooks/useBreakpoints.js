import { breakpoints } from '@constants/index';
import { useMediaQuery } from '@mui/material';

const useBreakpoints = () => {
  const xs = useMediaQuery(breakpoints.xs);
  const sm = useMediaQuery(breakpoints.sm);
  const md = useMediaQuery(breakpoints.md);
  const lg = useMediaQuery(breakpoints.lg);
  const xl = useMediaQuery(breakpoints.xl);

  if (xs) {
    return 'xs';
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
