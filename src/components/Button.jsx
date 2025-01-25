function Button({ label, handler }) {
  return (
    <button type="button" onClick={handler}>
      {label}
    </button>
  );
}

export default Button;
