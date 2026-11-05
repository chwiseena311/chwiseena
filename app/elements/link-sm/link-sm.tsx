import "./link-sm.scss";

type LinkSmProps = {
  icon: string;
  href: string;
  title: string;
};

export default function LinkSm({ icon, href, title }: LinkSmProps) {
  return (
    <a className="link-sm" href={href}>
      <span className="link-sm__icon">
        <img src={icon} alt="" />
      </span>
      <span className="link-sm__title">{title}</span>
    </a>
  );
}