const figureStyles = {
  border: "1rem solid rgb(255,250,250)",
  borderBottom: "2rem solid rgb(255,250,250)",
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
