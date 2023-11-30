export default function CheckSquare({ checked, color, size }) {
  return (
    <div
      className={`${size} rounded border-2 cursor-pointer`}
      style={{ background: checked ? color : "#f5f5f5", borderColor: color }}
    ></div>
  );
}
