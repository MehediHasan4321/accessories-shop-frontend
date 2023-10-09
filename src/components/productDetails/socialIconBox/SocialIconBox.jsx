import useSocialIcon from '@/src/hooks/useSocialIcon/useSocialIcon';
import { Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const SocialIconBox = ({socialMedia}) => {
   
    return (
        <Box sx={{display:'flex',gap:'0.5rem',alignItems:'center'}}>
            {
                socialMedia.map(icon=><Icon key={icon.id} icon={icon}/>)
            }
        </Box>
    );
};

export default SocialIconBox;


const Icon = ({icon})=>{
   
    const {icon:data,isLoading} = useSocialIcon(icon?.attributes?.name)
    const base = data && data[0]?.attributes
    const name = base?.name
    const url = base?.icon?.data?.attributes?.formats?.small?.url
   
    return(
        <Box sx={{cursor:'pointer'}}>
            <Image src={url} height={20} width={20} alt={name} title={name}/>
        </Box>
    )
}