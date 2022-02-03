import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const CustomModal = ({
  open,
  title,
  onCloseModal,
  subtitle,
}) => {

  const style = {
    color: "#fff",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#000',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
        <Button
          onClick={onCloseModal}
          variant="contained"
          color="success"
        >
          Aceptar
        </Button>
      </Box>
    </Modal>
  );
};

export default CustomModal;
