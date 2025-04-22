export default function CustomButton({ onClick, children, style }) {
  return (
    <button className={style} onClick={onClick}>
      {children}
    </button>
  );
}
