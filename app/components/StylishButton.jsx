import "./StylishButton.modules.css";

export default function StylishButton({ value }) {
  return (
    <button className="stylishButton__container">{value.toUpperCase()}</button>
  );
}
