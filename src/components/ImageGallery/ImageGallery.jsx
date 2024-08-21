import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ imgArray, clickHandler }) => {
  return (
    <ul className={styles.imageList}>
      {imgArray.map(
        ({
          id,
          alt_description,
          urls: { small: thumbURL, regular },
        }) => (
          <li key={id} className={styles.imageItem}>
            <ImageCard
              id={id}
              alt_description={alt_description}
              thumbURL={thumbURL}
              clickHandler={clickHandler}
              regular={regular}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default ImageGallery;
