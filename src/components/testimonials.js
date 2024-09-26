import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: `We are glad that we got in touch with Squib Factory. From posting to replying, each and every task is being handled by them, that too in a better way than we are doing it.`,
    name: 'Mahesh Rathore',
    company: 'Protein O Clock',
  },
  {
    quote: `We started our marketing journey with such a company where only measurable results are delivered. By the end of the month, we got quality leads.`,
    name: 'Sanket Aggarwal',
    company: 'Divine Papers',
  },
  {
    quote: `I explained my entire project to Squib Factory's RM and team; they customized a marketing plan for branding as well as increasing my sales. Now I'm getting new prospects every day.`,
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
          fontFamily: 'Poppins, sans-serif',
          fontSize: '30px',
          fontWeight: 600,
          lineHeight: '45px',
          letterSpacing: '0.02em',
          color: 'rgba(0, 117, 139, 1)',
        }}
      >
        Client Testimonial
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          mb: 4,
          fontFamily: 'Poppins, sans-serif',
          fontSize: '25px',
          fontWeight: 500,
          lineHeight: '37.5px',
          letterSpacing: '0.02em',
        }}
      >
        Don’t take our word for it – here’s what our clients say:
      </Typography>

      {/* Testimonials */}
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              style={{ width: '100%' }}
            >
              <Card
                sx={{
                  height: '100%', // Ensures card takes full height
                  display: 'flex', // Allows flex-grow for CardContent
                  flexDirection: 'column', // Makes content flow vertically
                  border: '1px solid rgba(0, 0, 0, 1)',
                  borderRadius: '14px',
                  padding: '5px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{
                      mb: 3,
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '25px',
                      fontWeight: 500,
                      color: 'rgba(0, 0, 0, 1)',
                      lineHeight: '37.5px',
                      letterSpacing: '0.02em',
                      flexGrow: 1 // Pushes the name to the bottom
                    }}
                  >
                    “{testimonial.quote}”
                  </Typography>
                  {/* Name and Company at the bottom */}
                  <div>
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{
                        fontWeight: 'bold',
                        color: 'rgba(0, 117, 139, 1)',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '25px',
                        lineHeight: '37.5px',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '22px',
                        fontWeight: 300,
                        lineHeight: '33px',
                        letterSpacing: '0.02em',
                      }}
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
