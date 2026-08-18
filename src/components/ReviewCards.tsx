export type Review = { name: string; text: string };

function Stars() {
  return (
    <span className="flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="#bea16a" className="h-[15px] w-[15px]" aria-hidden="true">
          <path d="M12 2.5l2.9 5.9 6.6.9-4.8 4.6 1.2 6.5-5.9-3.1-5.9 3.1 1.2-6.5L2.5 9.3l6.6-.9z" />
        </svg>
      ))}
    </span>
  );
}

export function ReviewCards({ rows }: { rows: Review[][] }) {
  return (
    <div className="mb-2">
      {rows.map((row, i) => (
        <div key={i} className="mb-[18px] flex flex-col gap-[18px] sm:flex-row">
          {row.map((r, j) => (
            <div
              key={j}
              className="flex-1 rounded-[10px] border border-[#c9ab77] bg-white px-[28px] py-[22px]"
            >
              <p
                className="mb-[6px] text-[20px] font-medium leading-[1.5] tracking-[1.1px] text-mts-navy"
                style={{ fontFamily: "var(--mts-font-sans)" }}
              >
                {r.name}
              </p>
              <div className="mb-[10px] flex items-center gap-[10px]">
                <span className="text-[16px] text-mts-navy">Rating</span>
                <Stars />
              </div>
              <p className="text-[16px] leading-[1.8] text-mts-navy">{r.text}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
