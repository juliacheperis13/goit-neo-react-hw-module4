import Modal from "react-modal";

import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

function ImageModal({ image, onClose, modalIsOpen }) {
  return (
    <Modal
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      isOpen={modalIsOpen}
      onRequestClose={onClose}
      overlayClassName={styles.overlay}
      className={styles.modal}
    >
      {image && <img src={image.regularUrl} alt={image.alt_description} />}
    </Modal>
  );
}

export default ImageModal;
