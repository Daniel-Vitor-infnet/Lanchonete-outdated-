import React, { useState } from 'react';
import styles from '@/styles/Login.module.scss';
import { Grid2, Box } from '@/libs/mui';

const Panel: React.FC = () => {
 

  const GridStyke = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
  }

  const BoxStyle = {
    backgroundColor: "white",
    width: "40%",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",

  }


  return (
    <Grid2 style={GridStyke}>
      <Box style={BoxStyle}>
        <p>batata</p>
        <p>batata</p>
        <p>batata</p>
        <p>batata</p>
        <p>batata</p>
        <p>batata</p>
      </Box>
    </Grid2>
  );
};

export default Panel;
