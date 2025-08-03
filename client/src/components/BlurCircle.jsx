const BlurCircle = ({ top = "auto", left = "auto", right = "auto", bottom = "auto", size = "300px", color = "#f84565", opacity = "0.25" }) => {
  return (
    <div
      className="absolute -z-10 blur-[120px] rounded-full"
      style={{
        top,
        left,
        right,
        bottom,
        width: size,
        height: size,
        backgroundColor: color,
        opacity: opacity,
      }}
    />
  );
};

export default BlurCircle;
