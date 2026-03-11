const HorizontalDivider = ({ fill = "#E3E8EF", height = "1px" }) => (
  <svg 
    width="w-full" 
    height={height} 
    viewBox="0 0 100 1" 
    preserveAspectRatio="none"
    className="my-4"
  >
    <line 
      x1="0" y1="0.5" x2="100" y2="0.5" 
      stroke={fill} 
      strokeWidth="1" 
    />
  </svg>
);

export default HorizontalDivider;