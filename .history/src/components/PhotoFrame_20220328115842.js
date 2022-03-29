const figureStyles = {
  border: "1rem solid",
  borderBottom: "2rem solid",
  borderColor: "white",
  margin: 0,
  padding: 0,
};

const PhotoFrame = ({ children, className }) => {
  return (
    <figure className={className} style={figureStyles}>
      {children}
    </figure>
  );
};

export default PhotoFrame;
