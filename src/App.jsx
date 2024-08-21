import "./App.css";

import { useState, useEffect } from "react";
import { getImage } from "./api/api";

import { Toaster } from "react-hot-toast";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const paginationPerPage = 21;

  const onSubmit = (query) => {
    setImgArray([]);
    setPaginationPage(1);
    setSearchQuery(query.trim());
  };

  const loadMoreHandler = async () => {
    setPaginationPage((prev) => prev + 1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImg(null);
  };

  const openModal = ({ target }) => {
    const { dataset, alt } = target;
    const { regularUrl } = dataset;

    setSelectedImg({
      alt,
      regularUrl,
    });
    setIsModalOpen(true);
  };

  const [isLoadMore, setisLoadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [imgArray, setImgArray] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const data = await getImage({
          query: searchQuery,
          page: paginationPage,
          per_page: paginationPerPage,
        });

        setImgArray((prev) => [...prev, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, paginationPage]);

  useEffect(() => {
    if (imgArray.length > 0 && paginationPage < totalPages) {
      setisLoadMore(true);
    } else {
      setisLoadMore(false);
    }
  }, [paginationPage, totalPages, imgArray]);

  useEffect(() => {
    document.body.style.overflow =
      isModalOpen || isLoading ? "hidden" : "unset";
  }, [isModalOpen, isLoading]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      <ImageGallery imgArray={imgArray} clickHandler={openModal} />
      {isLoadMore && <LoadMoreBtn loadMoreHandler={loadMoreHandler} />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <Toaster />
      {
        <ImageModal
          modalIsOpen={isModalOpen}
          onClose={closeModal}
          image={selectedImg}
        />
      }
    </>
  );
}

export default App;
