import React from 'react';
import Grid2, { Grid2Props } from '@mui/material/Grid2';

interface IGrid2Props extends Grid2Props {
    children: React.ReactNode;
}

const Grid: React.FC<IGrid2Props> = ({ children, ...props }) => {
    return <Grid2 {...props}>{children}</Grid2>;
};

export default Grid;
