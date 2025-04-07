export default function Button({ onClick, children, style }) {
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
