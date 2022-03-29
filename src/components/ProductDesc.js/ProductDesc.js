import Header from "../Header";
import Price from "../Price";

const ProductDesc = ({ title, productPrice, className }) => {
  return (
    <section
      style={{ display: "flex", flexFlow: "column", padding: "1rem" }}
      className={className}
    >
      <Header element="h5" title={title} textAlign="left" />
      <p
        style={{
          textTransform: "capitalize",
          color: "var(--dark-sec-color)",
          fontSize: " 1rem",
        }}
      >
        <Price amount={productPrice} />
      </p>
    </section>
  );
};

export default ProductDesc;
