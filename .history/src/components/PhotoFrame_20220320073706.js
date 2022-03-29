const figureStyles = {
  border: "1rem solid white",
  borderBottom: "2rem solid white",
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
