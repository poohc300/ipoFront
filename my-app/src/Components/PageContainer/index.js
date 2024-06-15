// PageContainer.js
import React from 'react';
import { Box } from '@mui/material';

const PageContainer = ({ children }) => {
    return (
        <Box sx={{ maxWidth: '1000px', mx: 'auto', p: 5 }}>
            {children}
        </Box>
    );
}

export default PageContainer;