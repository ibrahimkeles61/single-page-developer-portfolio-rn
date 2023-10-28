import "./Rings.modules.css";

export default function Rings({ place }) {
  return (
    <div className={place}>
      <div className="ring_boilerplate top1"></div>
      <div className="ring_boilerplate top2"></div>
      <div className="ring_boilerplate top3"></div>
      <div className="ring_boilerplate top4"></div>
      <div className="ring_boilerplate top5"></div>
    </div>
  );
}
