import React, { useState } from 'react';
import { Grid2, Box, Select, MenuItem, Button, Typography } from '@/libs/mui';

const TimeSelectPerso: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);



  const gridStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };



  return (
    <Grid2 sx={gridStyles}>
        <Grid2 container spacing={2} justifyContent="center">
          <Select value={hours} onChange={(e) => setHours(Number(e.target.value))}>
            {[...Array(24).keys()].map((h) => (
              <MenuItem key={h} value={h}>{`${h}h`}</MenuItem>
            ))}
          </Select>
          <Select value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}>
            {[...Array(60).keys()].map((m) => (
              <MenuItem key={m} value={m}>{`${m}m`}</MenuItem>
            ))}
          </Select>
          <Select value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}>
            {[...Array(60).keys()].map((s) => (
              <MenuItem key={s} value={s}>{`${s}s`}</MenuItem>
            ))}
          </Select>
        </Grid2>
    </Grid2>
  );
};

export default TimeSelectPerso;
