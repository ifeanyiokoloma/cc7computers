import Products from "../../components/products/Products";

const Accessories = ({ link, linkName, extent }) => {
  return (
    <>
      <Products
        productName="Accessories"
        productType="accessory"
        extent={extent}
        link={link}
        linkName={linkName}
      />
    </>
  );
};

export default Accessories;
