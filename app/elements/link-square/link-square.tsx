import { Link } from "react-router";
import "./link-square.scss";

type LinkSquareProps = {
  icon: string;
  href: string;
  title: string;
};

export default function LinkSquare({ icon, href, title }: LinkSquareProps) {
  return (
    <Link className="link-square" to={href}>
      <span className="link-square__icon">
        <img src={icon} alt="" />
      </span>
      <span className="link-square__title">{title}</span>
    </Link>
  );
}