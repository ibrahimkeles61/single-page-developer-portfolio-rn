import "./StylishProjectButton.modules.css";

export default function StylishProjectButton({ value }) {
  return (
    <div className="stylishProjectButton__container">{value.toUpperCase()}</div>
  );
}
