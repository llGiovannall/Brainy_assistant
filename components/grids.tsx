import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#29418ba2',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#29418ba2',
  }),
}));

 

export default function FullWidthGrid({ children }: { children: React.ReactNode }) {
     const [resultado, setResultado] = useState<any>(null);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 14}}>
          
          <Item>{children}</Item>
        </Grid>
        </Grid>
     </Box>
  );
}