import { SiteLink } from "./SiteLink";

export type PostItem = {
  title: string;
  excerpt?: string;
  img: string;
  href: string;
};

export function PostGrid({ label, sublabel, items }: { label: string; sublabel: string; items: PostItem[] }) {
  return (
    <div className="flex flex-wrap items-start">
      <div className="w-full shrink-0 border-mts-navy/20 pr-8 text-right md:w-[220px] md:border-r">
        <p
          className="leading-none text-mts-navy/85"
          style={{ fontSize: 60, fontFamily: "var(--mts-font-sans)", fontWeight: 400 }}
        >
          {label}
        </p>
        <p
          className="mt-1 text-mts-navy/85"
          style={{ fontSize: 30, fontFamily: "var(--mts-font-sans)", fontWeight: 400 }}
        >
          {sublabel}
        </p>
        <div className="mt-3 ml-auto h-px w-[120px] bg-mts-navy/30" />
      </div>

      <div className="grid min-w-0 flex-1 grid-cols-1 gap-x-10 gap-y-12 pl-0 sm:grid-cols-2 md:pl-10 lg:grid-cols-3">
        {items.map((p) => (
          <article key={p.href} className="flex flex-col">
            <SiteLink href={p.href} className="block">
              <img src={p.img} alt={p.title} loading="lazy" className="h-[213px] w-full object-cover" />
            </SiteLink>
            <h3
              className="mt-5 text-center leading-snug text-mts-navy"
              style={{ fontSize: 21, fontFamily: "var(--mts-font-sans)", fontWeight: 400 }}
            >
              {p.title}
            </h3>
            {p.excerpt ? (
              <p className="mt-4 text-justify text-[15px] leading-[1.7] text-mts-navy/90">{p.excerpt}</p>
            ) : null}
            <div className="mt-5 flex justify-center">
              <SiteLink
                href={p.href}
                className="inline-block rounded-full border border-mts-navy/25 bg-white px-6 py-2 text-[15px] text-mts-navy transition-colors hover:border-mts-gold hover:text-mts-gold"
              >
                Read More
              </SiteLink>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
