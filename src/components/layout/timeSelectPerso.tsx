import React, { useState } from 'react';
import { Grid2, Box, Select, MenuItem, Button, Typography } from '@/libs/mui';

const TimeSelectPerso: React.FC = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleStart = () => {
    setSelectedTime(
      `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    );
  };

  const gridStyles = {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
  };

  const boxStyle = {
    width: '100%',
    maxWidth: 400,
    borderRadius: 2,
    padding: 2,
    boxShadow: 3,
    backgroundColor: 'white',
  };

  return (
    <Grid2 sx={gridStyles}>
      <Box sx={boxStyle}>
        <Typography variant="h5" gutterBottom align="center">
          Selecione o tempo de espera
        </Typography>
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
        <Button variant="contained" color="primary" onClick={handleStart} fullWidth sx={{ mt: 2 }}>
          Confirmar Tempo
        </Button>
        {selectedTime && (
          <Typography variant="h6" align="center" sx={{ mt: 2 }}>
            Tempo selecionado: {selectedTime}
          </Typography>
        )}
      </Box>
    </Grid2>
  );
};

export default TimeSelectPerso;
