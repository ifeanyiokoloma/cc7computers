const paperStyles = {
  boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
  padding: ".5in",
  backgroundColor: "rgb(240,255,240)",
};

const Paper = ({ children, className }) => {
  return (
    <section className={className} style={paperStyles}>
      {children}
    </section>
  );
};

export default Paper;
