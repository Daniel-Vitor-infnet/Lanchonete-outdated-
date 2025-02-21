import React, { ReactNode } from 'react';
import Grid, { Grid2Props as GridProps } from '@mui/material/Grid2';

interface Grid2MUIProps extends GridProps {
  children?: ReactNode;
}

const Grid2MUI: React.FC<Grid2MUIProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default Grid2MUI;
