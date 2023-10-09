import { ReactNode } from "react";

interface ButtonProps {
  Label: string;
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'danger' | 'dark' | 'success';
  onClick: (msg: string) => void;
}

let c: number = 1;

const Button = ({ Label, children, color = 'primary', onClick }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={"btn btn-" + color}
        onClick={() => {
          onClick(`Clicked ${c++}`);
        }}
      >
        {Label}
        {children}
      </button>
    </>
  );
};

export default Button;
