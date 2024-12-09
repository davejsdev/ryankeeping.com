import React from "react";
import "./ButtonLink.css";

type Props = {
  href?: string;
  disabled?: boolean;
  external?: boolean;
  color?: string;
  textColor?: string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  variant?: "nav";
};

const ButtonLink = (props: Props) => {
  const {
    external,
    color = "#eee",
    textColor = "#111",
    href,
    size,
    variant,
    disabled,
  } = props;

  return (
    <a
      className="button-link"
      style={
        { "--button-color": color, "--button-text-color": textColor } as any
      }
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      data-size={size}
      data-disabled={disabled}
      data-variant={variant}
    >
      {props.children}
    </a>
  );
};

export default ButtonLink;
