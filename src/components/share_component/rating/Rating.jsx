import { StarBorderOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';

const Rating = ({num=0}) => {
    return (
        <div>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <StarBorderOutlined/>
                <StarBorderOutlined/>
                <StarBorderOutlined/>
                <StarBorderOutlined/>
                <StarBorderOutlined/>
            </Box>
        </div>
    );
};

export default Rating;