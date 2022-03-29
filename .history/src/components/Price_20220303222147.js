const Price = ({ amount }) => {
  return (
    <span>
      &#8358;{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
    </span>
  );
};

export default Price;
