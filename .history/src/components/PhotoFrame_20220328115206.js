const figureStyles = {
  border: "1rem solid var(--yellow-color)",
  borderBottom: "2rem solid var(--yellow-color)",
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
