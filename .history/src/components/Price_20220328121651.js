const Price = ({ amount, size, weight }) => {
  const stylePrice = {
    fontSize: size,
    fontWeight: weight,
  };
  return (
    <span style={stylePrice}>
      &#8358;{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
};

export default Price;
