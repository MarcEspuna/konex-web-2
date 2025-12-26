export default function SectionHeader({
  kicker,
  title,
  description
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div>
      {kicker ? <div className="section-kicker">{kicker}</div> : null}
      <h2 className="section-title">{title}</h2>
      {description ? <p className="hero-lede">{description}</p> : null}
      <div className="accent-bar" />
    </div>
  );
}
