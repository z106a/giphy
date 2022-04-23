import { ImageList, ImageListItem, Typography } from '@mui/material';
import { useState } from 'react';
import { IGyphy,  } from '../../app/types';
import Modal from './components/Modal';


interface IProps {
  data: IGyphy[];
}
const MainPage: React.FC<IProps> = (props) => {
  const { data } = props;
  const [selected, setSelected] = useState<IGyphy | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const imageClick = (item: IGyphy) => () => {
    setSelected(item);
    handleOpen();
  }
  if (!data.length) return <Typography variant='h3' textAlign="center">No data</Typography>

  return (
    <>
    <ImageList variant="quilted" cols={3} rowHeight={264}>
      {data.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={item.images.fixed_height_small.webp}
            alt={item.title}
            loading="lazy"
            onClick={imageClick(item)}
          />
        </ImageListItem>
      ))}
    </ImageList>
    <Modal item={selected} open={open} onClose={handleClose} />
    </>
  );
};

export default MainPage;
