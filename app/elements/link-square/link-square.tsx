import "./link-square.scss";

type LinkSquareProps = {
  icon: string;
  href: string;
  title: string;
};

export default function LinkSquare({ icon, href, title }: LinkSquareProps) {
  return (
    <a className="link-square" href={href}>
      <span className="link-square__icon">
        <img src={icon} alt="" />
      </span>
      <span className="link-square__title">{title}</span>
    </a>
  );
}