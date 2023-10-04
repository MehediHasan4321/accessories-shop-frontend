import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import SectionTitle from '../../share_component/sectionTitle/SectionTitle';
import useServices from '@/src/hooks/useServices/useServices';


const Service = () => {

    const { services, isLoading } = useServices()
   
    const info = {
        title: 'We Provide High Quality Goods',
        description: "A client that's unhappy for a reason is a problem, a client that's unhappy though he or her can't"
    }
    
    
    return (
        <Container maxWidth='lg'>
            <SectionTitle info={info} />
            <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                {
                 services && services?.data.map(service=><Compo key={service.id} service={service} />)
                }
            </Box>
        </Container>
    );
};

export default Service;

const Compo = ({ service }) => {

    const { title, description, icon } = service?.attributes || {}
    const url = icon?.data?.attributes?.formats?.small?.url
    return (
        <Box sx={{width:'30%',display:'flex',flexDirection:'column',alignItems:'center',gap:'0.2rem'}}>
            <Box sx={{width:'80px',height:'80px'}}>
            <img style={{width:'100%',height:'100%',objectFit:'contain'}} src={url} alt={title} />
            </Box>
            <Typography variant='h5'>
                {title}
            </Typography>
            <Typography variant='body1' textAlign='center' color='gray'>
                {description}
            </Typography>
        </Box>
    )
}