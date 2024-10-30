// src/components/MainContent.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface MainContentProps {
  activeItem: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeItem }) => {
  let content;

  switch (activeItem) {
    case 'Risiko spredning':
      content = <Typography variant="h4">Indhold for Risiko spredning</Typography>;
      break;
    case 'Work in progress 1':
      content = <Typography variant="h4">Indhold for Work in progress 1</Typography>;
      break;
    case 'Work in progress 2':
      content = <Typography variant="h4">Indhold for Work in progress 2</Typography>;
      break;
    case 'Work in progress 3':
      content = <Typography variant="h4">Indhold for Work in progress 3</Typography>;
      break;
    case 'Help':
      content = <Typography variant="h4">Indhold for Help</Typography>;
      break;
    default:
      content = <Typography variant="h4">Vælg et menupunkt</Typography>;
  }

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      {content}
    </Box>
  );
};

export default MainContent;
