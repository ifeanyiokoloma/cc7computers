const Price = ({ amount, size, weight, txtColor }) => {
  const stylePrice = {
    fontSize: size,
    fontWeight: weight,
    color: txtColor,
  };
  return (
    <span style={stylePrice}>
      &#8358;{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
};

export default Price;
