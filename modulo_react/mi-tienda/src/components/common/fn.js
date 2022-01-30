const Button = ({ content, onClick, variant }) => (
  <button className={variant} onClick={onClick}>
    {content}
  </button>
);

export { Button };
