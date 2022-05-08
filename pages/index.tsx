import type { NextPage } from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../components/Link/Link';
import Navbar from '../components/Navbar/NavBar';
import { Grid } from '@mui/material';
import ActionAreaCard from '../components/Card/ActionAreaCard';

const Home: NextPage = () => {
  return (
    <Container disableGutters={true} maxWidth={false}>
      <Navbar />
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
      {/* center grid and grid items */}
      <Grid container spacing={3} alignItems="center"
        justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item sm={2}>
          <ActionAreaCard />
        </Grid>
        <Grid item sm={2}>
          <ActionAreaCard />
        </Grid>
        <Grid item sm={2}>
          <ActionAreaCard />
        </Grid>
        <Grid item sm={2}>
          <ActionAreaCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home
