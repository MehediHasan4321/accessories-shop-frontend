const { Box, Typography } = require("@mui/material")

const TagBox = ({tags})=>{
    
    return (
        <Box sx={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
            {
                tags.map(tag=><Tag key={tag.id} tag={tag}/>)
            }
        </Box>
    )
}

export default TagBox

const Tag = ({tag})=>{
    
    const name = tag?.attributes?.tag
    return (
        <Typography sx={{fontWeight:'600',color:'GrayText'}}>
            {name},
        </Typography>
    )
}