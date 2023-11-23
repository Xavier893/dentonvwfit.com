import { title } from "process";

type ButtonProps = {
    type: 'button' | 'submit';
    title: string;
}

const Button = ({type, title}: ButtonProps) => {
  return (
    <button className="btn nav-link" type={type}>
        <label >{title}</label>
    </button>
  )
}

export default Button