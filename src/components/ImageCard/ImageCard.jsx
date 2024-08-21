import styles from "./ImageCard.module.css";

const ImageCard = ({
  thumbURL,
  alt_description,
  id,
  clickHandler,
  regular,
}) => {
  return (
    <div className={styles.imageContainer}>
      <img
        src={thumbURL}
        alt={alt_description}
        className={styles.image}
        data-id={id}
        data-regular-url={regular}
        onClick={clickHandler}
      />
    </div>
  );
};

export default ImageCard;