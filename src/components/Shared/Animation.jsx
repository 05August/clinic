const Animation = ({ data }) => {
  return (
    <img
      src={data.url}
      alt="animation"
      className={`animate animate-${data.className}`}
      style={data.style}
    ></img>
  );
};

export default Animation;
