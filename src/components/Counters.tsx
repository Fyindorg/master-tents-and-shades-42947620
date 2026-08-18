import { useEffect, useRef, useState } from "react";

export type CounterItem = { label: string; value: number };

function useCountUp(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return value;
}

function Counter({ item, start }: { item: CounterItem; start: boolean }) {
  const value = useCountUp(item.value, start);
  return (
    <div className="flex-1 px-2 text-center">
      <p className="whitespace-nowrap text-[clamp(14px,1.4vw,20px)] font-medium leading-[1.4] text-mts-navy">
        {item.label}
      </p>
      <p className="mt-1 text-[clamp(34px,3.5vw,50px)] leading-[1.2] text-mts-gold">{value}</p>
    </div>
  );
}

export function Counters({ items }: { items: CounterItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="my-6 flex flex-wrap items-stretch divide-x divide-mts-navy/25">
      {items.map((item) => (
        <Counter key={item.label} item={item} start={start} />
      ))}
    </div>
  );
}
