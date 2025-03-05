import React, { useState } from 'react';
import { Grid2, Box, Select, MenuItem, Button, Typography } from '@/libs/mui';

const TimeSelectPerso: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const gridStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: "40px",
    gap: "10px",
  };

    const SelectStyles = {
      maxHeight: "224px",
  };

  return (
    <Grid2 sx={gridStyles}>
          <Select style={{maxHeight: "100%"}} value={hours} onChange={(e) => setHours(Number(e.target.value))} MenuProps={{ PaperProps: { style: { maxHeight: 224 } } }}>
            {[...Array(24).keys()].map((h) => (
              <MenuItem key={h} value={h}>{`${h}h`}</MenuItem>
            ))}
          </Select>
          <Select style={{maxHeight: "100%"}} value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} MenuProps={{ PaperProps: { style: { maxHeight: 224 } } }}>
            {[...Array(60).keys()].map((m) => (
              <MenuItem key={m} value={m}>{`${m}m`}</MenuItem>
            ))}
          </Select>
          <Select style={{maxHeight: "100%"}} value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} MenuProps={{ PaperProps: { style: { maxHeight: 224 } } }}>
            {[...Array(60).keys()].map((s) => (
              <MenuItem key={s} value={s}>{`${s}s`}</MenuItem>
            ))}
          </Select>
    </Grid2>
  );
};

export default TimeSelectPerso;
