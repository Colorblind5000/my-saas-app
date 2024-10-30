// src/pages/index.tsx
import React from 'react';
import { Button } from '@mui/material';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My SaaS App</h1>
      <Button variant="contained" color="primary">
        Test Button
      </Button>
    </div>
  );
};

export default HomePage;
