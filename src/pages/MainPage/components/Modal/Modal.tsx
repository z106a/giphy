import { Box, Modal } from "@mui/material";
import { IGyphy } from "../../../../app/types";
import ImageCarousel from "../../../../components/ImageCarousel";
import { modalContent } from "./style";

interface IProps {
  item: IGyphy | null;
  open: boolean;
  onClose: () => void;
}

const ModalWrapper: React.FC<IProps> = (props) => {
  const {item, open, onClose} = props;
  let images: string[] = [];
  let types: string[] = [];
  item?.images && Object.keys(item?.images).forEach((key) => {
    if (item.images[key].url) {
      images.push(item.images[key].url);
      types.push(key);
    }
  });

  return (
    <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalContent}>
          <ImageCarousel images={images} types={types} />
        </Box>
      </Modal>
  )
}

export default ModalWrapper;