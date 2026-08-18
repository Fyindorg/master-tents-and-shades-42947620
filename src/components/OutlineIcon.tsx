const PATHS: Record<string, { d: string }[]> = {
  texture: [
    { d: "M2 22 22 2" },
    { d: "M2 13 13 2" },
    { d: "M4 2 2 4" },
    { d: "m11 22 11-11" },
    { d: "m22 20-2 2" },
  ],
  "grid-50": [
    { d: "M2 2h2v2H2zM8 2h2v2H8zM14 2h2v2h-2zM20 2h2v2h-2z" },
    { d: "M2 8h2v2H2zM8 8h2v2H8zM14 8h2v2h-2zM20 8h2v2h-2z" },
    { d: "M2 14h2v2H2zM8 14h2v2H8zM14 14h2v2h-2zM20 14h2v2h-2z" },
    { d: "M2 20h2v2H2zM8 20h2v2H8zM14 20h2v2h-2zM20 20h2v2h-2z" },
  ],
  blend: [
    { d: "M8 5s4 3 4 8-4 8-4 8M16 5s2 2.5 2 8c0 5.6-2 8-2 8" },
    { d: "M1 10h22M1 16h22" },
    { d: "M1 5h22v16H1z" },
  ],
  components: [
    { d: "M1 1h5v22H1zM19 9h4v14h-4zM10 1h13v4H10z" },
    { d: "M10 18h5v5h-5zM10 9h5v5h-5z" },
  ],
};

export function OutlineIcon({ name, size = 44 }: { name: string; size?: number }) {
  const paths = PATHS[name];
  if (!paths) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeLinecap="square"
      strokeMiterlimit={10}
      strokeWidth={1}
    >
      {paths.map((p, i) => (
        <path key={i} d={p.d} />
      ))}
    </svg>
  );
}
