import type { CSSProperties } from "react";
import "./link-sm.scss";

type LinkSmAppearanceProps = {
  title: string;
  color?: string;
  backgroundColor?: string;
};

type LinkSmProps = LinkSmAppearanceProps & {
  href: string;
};

type LinkSmStyle = CSSProperties & {
  "--link-sm-color"?: string;
  "--link-sm-background-color"?: string;
};

function getLinkSmStyle({
  color,
  backgroundColor,
}: Pick<LinkSmAppearanceProps, "color" | "backgroundColor">): LinkSmStyle {
  return {
    "--link-sm-color": color,
    "--link-sm-background-color": backgroundColor,
  };
}

export default function LinkSm({
  href,
  title,
  color,
  backgroundColor,
}: LinkSmProps) {
  const style = getLinkSmStyle({ color, backgroundColor });

  return (
    <a className="link-sm" href={href} style={style}>
      <span className="link-sm__title">{title}</span>
    </a>
  );
}

export function LinkSmLabel({
  title,
  color,
  backgroundColor,
}: LinkSmAppearanceProps) {
  const style = getLinkSmStyle({ color, backgroundColor });

  return (
    <span className="link-sm link-sm--static" style={style}>
      <span className="link-sm__title">{title}</span>
    </span>
  );
}
