import type { CSSProperties } from "react";
import siteData from "@/data/site.json";
import { RAW_PAGES } from "@/data/rawPages";
import { QuoteForm } from "./QuoteForm";
import { SiteLink } from "./SiteLink";
import { HeroSlideshow } from "./HeroSlideshow";
import { Counters } from "./Counters";
import { PostGrid, type PostItem } from "./PostGrid";
import { ReviewCards, type Review } from "./ReviewCards";
import { OutlineIcon } from "./OutlineIcon";

export type Block =
  | { t: "h1" | "h2" | "h3" | "h4" | "p"; text: string; align?: string | null; fs?: number | null; fw?: number | null; ff?: string | null; color?: string | null; italic?: boolean; tight?: boolean }
  | { t: "list"; items: string[]; align?: string | null; color?: string | null; fs?: number | null }
  | { t: "img"; src: string; alt?: string | null; href?: string | null }
  | { t: "btn"; text: string; href?: string | null }
  | { t: "form" }
  | { t: "hr" }
  | { t: "accordion"; items: { title: string; body: Block[] }[] }
  | { t: "stats"; items: { label: string; value: number }[] }
  | { t: "posts"; label: string; sublabel: string; items: PostItem[] }
  | { t: "reviews"; rows: Review[][] }
  | { t: "tiles"; items: { img: string; label: string }[] }
  | { t: "linktiles"; items: { img: string; label: string; href?: string | null }[] }
  | { t: "map"; q: string }
  | { t: "icon"; name: string }
  | { t: "row"; cols: Block[][] };



export type Section = {
  bg?: string | null;
  bgpos?: string | null;
  bgcolor?: string | null;
  pad?: string | null;
  slideshow?: string[];
  blocks: Block[];
};

export type Page = { title: string; desc: string; sections: Section[] };

export const PAGES = siteData as unknown as Record<string, Page>;

type TextBlock = Extract<Block, { t: "p" | "h1" | "h2" | "h3" | "h4" }>;

function textStyle(b: TextBlock): CSSProperties {
  const isHeading = b.t !== "p";
  const style: CSSProperties = {};
  if (b.fs) style.fontSize = `${b.fs}px`;
  style.fontWeight = b.fw ?? (isHeading ? 400 : undefined);
  if (b.color) style.color = b.color;
  if (b.italic) style.fontStyle = "italic";
  style.fontFamily = b.ff === "serif" ? "var(--mts-font-serif)" : "var(--mts-font-sans)";
  style.textAlign = (b.align as CSSProperties["textAlign"]) ?? "left";
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
        <Tag className="mb-4 leading-snug text-mts-navy" style={textStyle(block)}>
          {block.text}
        </Tag>
      );
    }
    case "p":
      return (
        <p className={block.tight ? "mb-0 leading-[1.6]" : "mb-4 leading-[1.7]"} style={textStyle(block)}>
          {block.text}
        </p>
      );
    case "hr":
      return <hr className="my-3 border-0 border-t border-mts-navy/40" />;
    case "list": {
      const inline = block.align === "center" || block.align === "right";
      const fs = block.fs ?? 18;
      if (inline) {
        return (
          <ul
            className="mb-4 list-none p-0 font-medium"
            style={{
              color: block.color ?? "var(--mts-navy)",
              fontSize: `${fs}px`,
              lineHeight: 1.6,
              fontWeight: block.fs ? 400 : 500,
              textAlign: block.align as CSSProperties["textAlign"],
            }}
          >
            {block.items.map((item, i) => (
              <li key={i}>
                <span className="mr-[6px] align-middle text-[0.7em]">•</span>
                {item}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <ul
          className="mb-4 ml-[-5px] list-disc pl-[24px] marker:text-[0.7em]"
          style={{
            color: block.color ?? "var(--mts-navy)",
            fontSize: `${fs}px`,
            lineHeight: 1.6,
            fontWeight: block.fs ? 400 : 500,
            textAlign: (block.align as CSSProperties["textAlign"]) ?? "justify",
          }}
        >
          {block.items.map((item, i) => (
            <li key={i} className="ml-[10px]">
              {item}
            </li>
          ))}
        </ul>
      );
    }


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
        <div className="mb-4 text-center">
          <SiteLink
            href={block.href ?? "#"}
            className="inline-block rounded-[15px] border border-[#9e9e9e] bg-white px-[25px] py-[6px] text-[16px] text-mts-navy transition-colors hover:border-mts-gold hover:text-mts-gold"
          >
            {block.text}
          </SiteLink>
        </div>
      );
    case "form":
      return (
        <div className="mb-4">
          <QuoteForm />
        </div>
      );
    case "accordion":
      return (
        <div className="mb-4">
          {block.items.map((item, i) => (
            <details
              key={i}
              open={i === 0}
              className="group -mb-px rounded-[10px] border border-[#9e9e9e] bg-white"
            >
              <summary
                className="flex cursor-pointer list-none items-center justify-between gap-3 px-[15px] py-[10px] text-[20px] leading-[1.6] text-[#2d3842]"
                style={{ fontFamily: "var(--mts-font-serif)", fontWeight: 400 }}
              >
                <span>{item.title}</span>
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 transition-transform group-open:-rotate-180"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                >
                  <path d="M5 9l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="px-[15px] pb-4 pt-2 leading-[1.7] text-black">
                {item.body.map((b, j) => (
                  <BlockView key={j} block={b} />
                ))}
              </div>
            </details>
          ))}
        </div>
      );
    case "icon":
      return (
        <div className="mb-3 flex justify-center text-mts-navy">
          <OutlineIcon name={block.name} />
        </div>
      );
    case "stats":
      return <Counters items={block.items} />;
    case "posts":
      return <PostGrid label={block.label} sublabel={block.sublabel} items={block.items} />;
    case "reviews":
      return <ReviewCards rows={block.rows} />;
    case "tiles":
      return (
        <div className="mb-4 grid grid-cols-1 gap-x-[30px] gap-y-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((it, i) => (
            <div key={i}>
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
              <p
                className="mt-2 text-center text-mts-navy"
                style={{ fontSize: 18, fontWeight: 500, fontFamily: "var(--mts-font-sans)" }}
              >
                {it.label}
              </p>
            </div>
          ))}
        </div>
      );
    case "linktiles":
      return (
        <div className="mb-4 grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((it, i) => (
            <SiteLink
              key={i}
              href={it.href ?? "#"}
              className="relative block overflow-hidden rounded-[10px]"
            >
              <img
                src={it.img}
                alt={it.label}
                loading="lazy"
                className="h-[186px] w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/10 px-3 text-center text-[22px] font-normal text-white">
                {it.label}
              </span>
            </SiteLink>
          ))}
        </div>
      );
    case "map":
      return (
        <div className="mb-4">
          <iframe
            title="Master Tents and Shades location map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(block.q)}&z=15&output=embed`}
            loading="lazy"
            className="h-[400px] w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      );
    case "row": {

      const minW = block.cols.length >= 4 ? "min-w-[200px]" : "min-w-[280px]";
      return (
        <div className="mb-2 flex flex-wrap gap-x-8">
          {block.cols.map((col, i) => (
            <div key={i} className={`${minW} flex-1 basis-0`}>
              {renderBlocks(col)}
            </div>
          ))}
        </div>
      );
    }
    default:
      return null;
  }
}

function renderBlocks(blocks: Block[]) {
  const out: React.ReactNode[] = [];
  let i = 0;
  while (i < blocks.length) {
    const b = blocks[i]!;
    if (b.t === "btn") {
      let j = i;
      while (j < blocks.length && blocks[j]!.t === "btn") j++;
      const run = blocks.slice(i, j) as Extract<Block, { t: "btn" }>[];
      if (run.length > 1) {
        out.push(
          <div key={`b${i}`} className="mb-4 flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[10px]">
            {run.map((btn, k) => (
              <SiteLink
                key={k}
                href={btn.href ?? "#"}
                className="inline-block rounded-[15px] border border-[#9e9e9e] bg-white px-[25px] py-[6px] text-[16px] text-mts-navy transition-colors hover:border-mts-gold hover:text-mts-gold"
              >
                {btn.text}
              </SiteLink>
            ))}
          </div>,
        );
        i = j;
        continue;
      }
    }
    if (b.t === "img") {
      let j = i;
      while (j < blocks.length && blocks[j]!.t === "img") j++;
      const run = blocks.slice(i, j) as Extract<Block, { t: "img" }>[];
      if (run.length >= 4) {
        out.push(
          <div key={`g${i}`} className="my-4 grid grid-cols-2 gap-x-1 gap-y-2 sm:grid-cols-3 lg:grid-cols-6">
            {run.map((img, k) => (
              <div key={k} className="flex items-center justify-center">
                <img
                  src={img.src}
                  alt={img.alt || ""}
                  loading="lazy"
                  className="h-[189px] w-full object-contain"
                />
              </div>
            ))}
          </div>,
        );
        i = j;
        continue;
      }
    }
    out.push(<BlockView key={i} block={b} />);
    i++;
  }
  return out;
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
      {section.slideshow ? <HeroSlideshow images={section.slideshow} /> : null}
      {section.bg || section.slideshow ? (
        <div className="absolute inset-0 bg-black/25" aria-hidden="true" />
      ) : null}
      <div className={`mts-container relative ${section.bg || section.slideshow ? "text-white" : ""}`}>
        {renderBlocks(section.blocks)}
      </div>
    </section>
  );
}

export function PageRenderer({ page, slug }: { page: Page; slug?: string }) {
  const raw = slug ? RAW_PAGES[slug] : undefined;
  if (raw) {
    return <main dangerouslySetInnerHTML={{ __html: raw }} />;
  }
  return (
    <main className="mts-richtext">
      {page.sections.map((s, i) => (
        <SectionView key={i} section={s} />
      ))}
    </main>
  );
}
