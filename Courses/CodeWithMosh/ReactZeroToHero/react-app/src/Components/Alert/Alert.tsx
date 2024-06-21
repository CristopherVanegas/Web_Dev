import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Aler = ({children}: Props) => {
  return (
    <div className="alert alert-primary col-3" role="alert">
      {children}
    </div>
  );
};

export default Aler;
