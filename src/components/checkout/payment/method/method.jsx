import { Box, Radio, Typography } from "@mui/material"

const Method = ({ method, isChecked, handleMethod }) => {

    return (
        <Box component={'div'} onClick={() => handleMethod(method)} sx={{ width: '220px', height: '70px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
            <Radio checked={method === isChecked} name={method} />
            <Typography sx={{ userSelect: 'none' }}>{method}</Typography>
        </Box>
    )
}

export  default Method