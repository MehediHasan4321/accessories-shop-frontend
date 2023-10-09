import { useState } from "react";

const { Box, Input, Rating, Button } = require("@mui/material")

const TakeReview = () => {
    const [value,setValue] = useState(0)
    
    return (
        <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '50px', alignItems: 'end' }}>
            <img style={{ width: '50px', }} src="https://www.shareicon.net/data/256x256/2016/02/25/724703_people_512x512.png" alt="user" />
            <Input type="text" placeholder="Enter Your Comment" fullWidth />
            <Box>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    size="large"
                />
                <Button sx={{ fontWeight: '700', background: '#D5E8D4' }} fullWidth>Add</Button>
            </Box>
        </Box>
    )
}

export default TakeReview