import { ModalContext } from "../context/contexts";
import styles from "./search.module.css";
import { BsSearch } from "react-icons/bs";
import { useContext, useState } from "react";
import useFetchLive from "../../hooks/useFetchLive";
import { Modal } from "react-bootstrap";
import SearchResult from "./searchResult/SearchResult";

const SearchModal = () => {
  let filtered;
  const [filteredProducts, setFilteredProducts] = useState([]);
  const noSearch = "search for product's name, brand, model or type";
  const [dialogue, setDialogue] = useState(noSearch);
  const { handleCloseSearch, showSearch } = useContext(ModalContext);
  const [products] = useFetchLive("products", []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTyped = (e) => {
    const typed = e.target.value;
    filtered = products.filter((product) => {
      if (typed === "") {
        return setDialogue(noSearch);
      }

      if (
        product.brand.toLowerCase().includes(typed.toLowerCase()) ||
        product.model.toLowerCase().includes(typed.toLowerCase()) ||
        product.type.toLowerCase().includes(typed.toLowerCase()) ||
        product.name.toLowerCase().includes(typed.toLowerCase())
      ) {
        return product;
      }

      return setDialogue(
        (newDialogue) =>
          (newDialogue = "no product's name, brand, model or type found")
      );
    });

    return setFilteredProducts(filtered);
  };

  return (
    <Modal
      fullscreen={
        true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down"
      }
      scrollable={true}
      show={showSearch}
      onHide={handleCloseSearch}
    >
      <Modal.Header
        className={styles.form}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 0.5 }}
        onSubmit={handleSubmit}
        closeButton
      >
        <span className={styles.searchIcon}>
          <BsSearch />
        </span>

        <input
          onChange={(e) => handleTyped(e)}
          name="search"
          id="search"
          type="search"
          placeholder="Search"
          autoFocus={true}
          autoComplete="off"
        />
      </Modal.Header>
      <Modal.Body className={styles.searchResult}>
        <SearchResult
          filteredProducts={filteredProducts}
          closeSearch={handleCloseSearch}
          dialogue={dialogue}
        />
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;
