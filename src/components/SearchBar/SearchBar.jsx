import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import clsx from "clsx";

const SearchBar = ({ onSubmit }) => {
  const onSearch = (event) => {
    event.preventDefault();

    const searchQuery = event.target.elements.search.value;
    if (searchQuery.trim() === "") {
      toast.error("Please enter valid search query", { position: "top-right" });
    } else {
      onSubmit(searchQuery);
    }
  };

  return (
    <header className="header">
      <form className={styles.searchForm} onSubmit={onSearch}>
        <input
          name="search"
          className="input"
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
        <button className={clsx("button", styles.searchButton)} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
