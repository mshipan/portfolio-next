interface Props {
  className?: string;
}
const CircleLight = ({ className }: Props) => {
  return <div className={`circle-shadow w-40 h-40 ${className}`} />;
};

export default CircleLight;
