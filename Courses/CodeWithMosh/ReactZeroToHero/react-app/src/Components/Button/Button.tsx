
interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger' | 'success';

    handleOnClick: () => void;
}

const Button = ({ children, handleOnClick, color = 'primary' } : Props) => {
  return (
    <button className={"btn btn-" + color} onClick={handleOnClick}>{children}</button>
  )
}

export default Button