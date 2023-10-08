import { ReactNode } from "react";  // to receive html(ReactNode) it's neccesary to import ReactNode 

interface AlertProps {
    children : ReactNode;
}

const Alert = ({children}: AlertProps) => {
  return (
    <>
        
        <div className="alert alert-primary">{children}</div>
    </>
  )
}

export default Alert