import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import qq from '../img/qq.png';

const testimonials = [
  {
    quote: `We are glad that we got in touch with Squib Factory. From posting to replying, each n every task is being handled by them, that too in a better way than we are doing it. Not to forget. they learn the taste of their clients in terms of social media content very quickly.`,
    name: 'Mahesh Rathore',
    company: 'Protein O Clock',
  },
  {
    quote: `We started our marketing journey with such a company where only measurable results are delivered. As we were very concerned about the number of potential customers committed but by the end of the month, we got quality leads. On a scale of 1-10, without a doubt, I’ll rate them 10.`,
    name: 'Sanket Aggarwal',
    company: 'Divine Papers',
  },
  {
    quote: `I explained my entire project to Squib Factory’s RM and team, they customized a marketing plan for Branding as well as for increasing my sales. Now I am getting new prospects every day, and entire credit goes to Squib Factory Pvt Ltd.`,
    name: 'Hitesh Panchal',
    company: 'Wellness Coach Hitesh',
  },
];

const TestimonialSection = () => {
  return (
    <Container sx={{ py: 6 }}>
      {/* Heading */}
      <Typography
        variant="h5"
        marginTop={10}
        gutterBottom
        sx={{

          color: 'rgba(0, 117, 139, 1)',
        }}

        className='client-testimonial-heading'
      >
        Client Testimonial
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mb: 4,
          // fontFamily: 'Poppins, sans-serif',
          // fontSize: '25px',
          // fontWeight: 500,
          // lineHeight: '37.5px',
          // letterSpacing: '0.02em',
        }}
        className='test-home-dont'
      >
        Don’t take our word for it – here’s what our clients say:
      </Typography>

      {/* Testimonials */}
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }} // Trigger animation when 50% of the card is in view
              style={{ width: '100%' }}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid rgba(0, 0, 0, 1)',
                  borderRadius: '14px',
                  padding: '5px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <img src={qq} height={28} width={40} alt="quotation mark" />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      mb: 3,
                     
                      flexGrow: 1,
                    }}
                    className='test-content-para'
                  >
                    {testimonial.quote}
                  </Typography>
                  <div>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        // fontWeight: '500',
                        color: 'rgba(0, 117, 139, 1)',
                        // fontFamily: 'Poppins, sans-serif',
                        // fontSize: '25px',
                        // lineHeight: '37.5px',
                        // letterSpacing: '0.02em',
                      }}
                      className='testimonial-name'
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        // fontFamily: 'Poppins, sans-serif',
                        // fontSize: '22px',
                        // fontWeight: 300,
                        // lineHeight: '33px',
                        // letterSpacing: '0.02em',
                      }}
                      className='testinomoal-place'
                    >
                      {testimonial.company}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TestimonialSection;
