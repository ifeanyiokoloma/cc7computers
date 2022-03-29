const Price = ({ amount, size }) => {
  const stylePrice = {
    fontSize: size,
  };
  return (
    <span style={stylePrice}>
      &#8358;{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
};

export default Price;
