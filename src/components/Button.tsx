import { ButtonHTMLAttributes } from "react";

type ButtonPros = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonPros) {
  return <button className="button" {...props} />;
}
