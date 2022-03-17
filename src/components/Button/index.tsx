
interface IButton {
  children: string;
  onClick: () => void;
}
const Button = ({ children, onClick }: IButton) => {
  return (
    <button className="rounded-md bg-dark-brown text-white px-8 py-1" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button
