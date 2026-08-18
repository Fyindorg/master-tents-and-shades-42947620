import type { CSSProperties } from "react";
import siteData from "@/data/site.json";
import { QuoteForm } from "./QuoteForm";
import { SiteLink } from "./SiteLink";

export type Block =
  | { t: "h1" | "h2" | "h3" | "h4" | "p"; text: string; align?: string | null; fs?: number | null; fw?: number | null; ff?: string | null; color?: string | null }
  | { t: "list"; items: string[]; align?: string | null; color?: string | null }
  | { t: "img"; src: string; alt?: string | null; href?: string | null }
  | { t: "btn"; text: string; href?: string | null }
  | { t: "form" }
  | { t: "accordion"; items: { title: string; body: string }[] }
  | { t: "row"; cols: Block[][] };

export type Section = {
  bg?: string | null;
  bgpos?: string | null;
  bgcolor?: string | null;
  pad?: string | null;
  blocks: Block[];
};

export type Page = { title: string; desc: string; sections: Section[] };

export const PAGES = siteData as unknown as Record<string, Page>;

function textStyle(b: Extract<Block, { t: "p" }>): CSSProperties {
  const style: CSSProperties = {};
  if (b.fs) style.fontSize = `${b.fs}px`;
  if (b.fw) style.fontWeight = b.fw;
  if (b.color) style.color = b.color;
  if (b.ff === "serif") style.fontFamily = "var(--mts-font-serif)";
  style.textAlign = (b.align as CSSProperties["textAlign"]) ?? (b.t === "p" ? "justify" : "left");
  return style;
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case "h1":
    case "h2":
    case "h3":
    case "h4": {
      const Tag = block.t;
      return (
        <Tag className="mb-4 font-serif leading-snug text-mts-navy" style={textStyle(block as never)}>
          {block.text}
        </Tag>
      );
    }
    case "p":
      return (
        <p className="mb-4 leading-[1.7]" style={textStyle(block)}>
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul
          className="mb-4 list-disc space-y-2 pl-5 leading-[1.7]"
          style={{
            color: block.color ?? undefined,
            textAlign: (block.align as CSSProperties["textAlign"]) ?? undefined,
          }}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "img": {
      const img = (
        <img
          src={block.src}
          alt={block.alt ?? ""}
          loading="lazy"
          className="mb-4 h-auto w-full object-cover"
        />
      );
      return block.href ? (
        <SiteLink href={block.href} className="block">
          {img}
        </SiteLink>
      ) : (
        img
      );
    }
    case "btn":
      return (
        <div className="mb-4">
          <SiteLink
            href={block.href ?? "#"}
            className="inline-block rounded-full border-2 border-mts-gold px-7 py-3 text-[15px] font-semibold uppercase tracking-wide text-mts-gold transition-colors hover:bg-mts-gold hover:text-white"
          >
            {block.text}
          </SiteLink>
        </div>
      );
    case "form":
      return (
        <div className="mb-4 bg-white/95 p-6 shadow-sm">
          <QuoteForm />
        </div>
      );
    case "accordion":
      return (
        <div className="mb-4 divide-y divide-black/10 border border-black/10">
          {block.items.map((item, i) => (
            <details key={i} className="group px-5 py-4">
              <summary className="cursor-pointer list-none font-serif text-[20px] text-mts-navy">
                {item.title}
              </summary>
              <p className="mt-3 leading-[1.7] text-mts-grey">{item.body}</p>
            </details>
          ))}
        </div>
      );
    case "row":
      return (
        <div className="mb-2 flex flex-wrap gap-x-8">
          {block.cols.map((col, i) => (
            <div key={i} className="min-w-[280px] flex-1 basis-0">
              {col.map((b, j) => (
                <BlockView key={j} block={b} />
              ))}
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function SectionView({ section }: { section: Section }) {
  const style: CSSProperties = {};
  if (section.pad) {
    const parts = section.pad.split(" ");
    if (parts.length === 4) {
      style.paddingTop = parts[0];
      style.paddingBottom = parts[2];
    }
  }
  if (section.bgcolor) style.backgroundColor = section.bgcolor;
  if (section.bg) {
    style.backgroundImage = `url(${section.bg})`;
    style.backgroundSize = "cover";
    style.backgroundPosition = section.bgpos ?? "center";
    style.backgroundRepeat = "no-repeat";
  }

  return (
    <section style={style} className="relative">
      {section.bg ? <div className="absolute inset-0 bg-black/25" aria-hidden="true" /> : null}
      <div className={`mts-container relative ${section.bg ? "text-white" : ""}`}>
        {section.blocks.map((b, i) => (
          <BlockView key={i} block={b} />
        ))}
      </div>
    </section>
  );
}

export function PageRenderer({ page }: { page: Page }) {
  return (
    <main className="mts-richtext">
      {page.sections.map((s, i) => (
        <SectionView key={i} section={s} />
      ))}
    </main>
  );
}
