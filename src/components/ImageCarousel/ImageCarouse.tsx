import { CSSProperties, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Grid, IconButton, Paper, Typography } from '@mui/material';

interface IProps {
  images: string[];
  types: string[];
}

const button: CSSProperties = {
  width: '44px',
  height: '44px',
  backgroundColor: '#000',
  borderRadius: '4px',
};

const ImageCarousel: React.FC<IProps> = (props) => {
  const { images, types } = props;
  const [index, setIndex] = useState(0);
  console.log(images);
  const increase = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };
  const decrease = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  return (
    <Paper
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        padding: '70px 12px',
        borderRadius: '4px',
        height: '100%',
      }}
    >
      <Typography color="white" sx={{ textAlign: 'center' }}>
        {types[index]}
      </Typography>
      <Grid container wrap="nowrap" columnGap={2} height="100%" alignItems="center">
        <IconButton onClick={decrease} sx={button}>
          <KeyboardArrowLeftIcon sx={{ color: '#fff' }} />
        </IconButton>

        <img
          alt=""
          style={{ objectFit: 'scale-down', borderRadius: '4px', width: "300px", }}
          src={images[index]}
          height="100%"
        />

        <IconButton onClick={increase} sx={button}>
          <KeyboardArrowRight sx={{ color: '#fff' }} />
        </IconButton>
      </Grid>
    </Paper>
  );
};

export default ImageCarousel;
