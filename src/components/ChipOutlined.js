import * as React from 'react';
import Chip from '@mui/material/Chip';

export default function ChipOutlined({texte}) {
  return (

      <Chip size="small" label={texte} variant="outlined" sx={{m:0.4}} />
  );
}
