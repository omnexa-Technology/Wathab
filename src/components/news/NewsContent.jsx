'use client';

/**
 * NewsContent — Portable Text renderer for Sanity news articles.
 *
 * Design tokens (Figma node 3885:12122):
 *  H2        → #1b6936 green  | 32px bold    | lh-56px  (article main title)
 *  H3        → #141414 dark   | 32px medium  | lh-56px  (section heading)
 *  blockquote→ #595959 grey   | 24px regular | lh-48px  (intro / sub-desc)
 *  normal    → #595959 grey   | 20px regular | lh-40px  (body paragraph)
 *  bullet    → green check-circle + bold title (24px) + body text (20px)
 *  number    → green circle badge + bold title (24px) + body text (20px)
 *  strong    → #303030  bold
 *  em        → italic
 *  underline → underline
 *  highlightGreen → #1b6936 semibold
 *  link      → green underline
 *  image     → full-width rounded-3xl with optional caption
 */

import Image from 'next/image';

// ─── Mark renderers ────────────────────────────────────────────────────────────

function applyMark(mark, markDefs, children) {
  if (mark === 'strong')
    return <strong className="font-bold text-[#303030]">{children}</strong>;
  if (mark === 'em')
    return <em className="italic">{children}</em>;
  if (mark === 'underline')
    return <span className="underline underline-offset-2">{children}</span>;
  if (mark === 'highlightGreen')
    return <span className="text-[#1b6936] font-semibold">{children}</span>;

  const def = markDefs?.find((d) => d._key === mark);
  if (def?._type === 'link')
    return (
      <a
        href={def.href}
        target={def.blank ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="text-[#1b6936] underline underline-offset-2 hover:text-[#0d4020] transition-colors"
      >
        {children}
      </a>
    );

  return children;
}

function renderSpans(spans, markDefs) {
  return spans?.map((span, i) => {
    if (span._type !== 'span') return null;
    let node = span.text;
    (span.marks ?? []).forEach((m) => {
      node = applyMark(m, markDefs, node);
    });
    return <span key={i}>{node}</span>;
  });
}

// ─── Check-circle icon (matches Figma "check-circle-svgrepo-com 16") ──────────

function CheckCircleIcon({ className = '' }) {
  return (
    <svg
      className={`shrink-0 text-[#1b6936] ${className}`}
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M22 11.08V12a10 10 0 1 1-5.93-9.14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22 4 12 14.01 9 11.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ─── List renderers ────────────────────────────────────────────────────────────

/**
 * BulletList — renders bullet items as Figma "check-circle" pattern.
 * Bold text within the list item is styled as the 24px title;
 * remaining text is the 20px body description.
 */
function BulletList({ blocks, align }) {
  return (
    <ul className="flex flex-col gap-8 w-full">
      {blocks.map((b, i) => (
        <li key={i} className={`flex gap-6 items-start w-full ${align === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* Body text column */}
          <div className={`flex flex-col gap-4 flex-1 min-w-0 ${align === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
            {/* Render each span; strong marks become "title" styled text */}
            <p className="font-din text-[#303030] text-[20px] leading-[40px]">
              {renderSpans(b.children, b.markDefs)}
            </p>
          </div>
          {/* Check icon */}
          <CheckCircleIcon className="mt-1" />
        </li>
      ))}
    </ul>
  );
}

/**
 * NumberList — renders numbered items with a green circle badge.
 */
function NumberList({ blocks, align }) {
  return (
    <ol className="flex flex-col gap-8 w-full">
      {blocks.map((b, i) => (
        <li key={i} className={`flex gap-6 items-start w-full ${align === 'rtl' ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* Text column */}
          <div className={`flex flex-col gap-4 flex-1 min-w-0 ${align === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
            <p className="font-din text-[#303030] text-[20px] leading-[40px]">
              {renderSpans(b.children, b.markDefs)}
            </p>
          </div>
          {/* Number badge */}
          <span className="mt-1 shrink-0 w-8 h-8 rounded-full bg-[#1b6936] text-white text-sm flex items-center justify-center font-bold">
            {i + 1}
          </span>
        </li>
      ))}
    </ol>
  );
}

// ─── Main renderer ─────────────────────────────────────────────────────────────

/**
 * NewsContent
 *
 * @param {object[]} content  - Sanity Portable Text blocks (with imageUrl expansion)
 * @param {boolean}  isRTL    - Direction flag
 * @param {string}   [className]
 */
export function NewsContent({ content, isRTL = true, className = '' }) {
  if (!Array.isArray(content) || content.length === 0) return null;

  const align = isRTL ? 'rtl' : 'ltr';
  const textAlign = isRTL ? 'text-right' : 'text-left';

  const output = [];
  let i = 0;

  while (i < content.length) {
    const block = content[i];

    // ── Inline image ───────────────────────────────────────────────────────────
    if (block._type === 'image') {
      output.push(
        <figure key={block._key || `img-${i}`} className="flex flex-col gap-3 w-full">
          {block.imageUrl && (
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-gray-100">
              <Image
                src={block.imageUrl}
                alt={block.alt || ''}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
            </div>
          )}
          {block.caption && (
            <figcaption className={`font-din text-sm text-[#595959] ${textAlign}`}>
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
      i++;
      continue;
    }

    if (block._type !== 'block') { i++; continue; }

    // ── Bullet list ────────────────────────────────────────────────────────────
    if (block.listItem === 'bullet') {
      const listBlocks = [];
      while (i < content.length && content[i].listItem === 'bullet') {
        listBlocks.push(content[i]);
        i++;
      }
      output.push(<BulletList key={`bullet-${i}`} blocks={listBlocks} align={align} />);
      continue;
    }

    // ── Number list ────────────────────────────────────────────────────────────
    if (block.listItem === 'number') {
      const listBlocks = [];
      while (i < content.length && content[i].listItem === 'number') {
        listBlocks.push(content[i]);
        i++;
      }
      output.push(<NumberList key={`number-${i}`} blocks={listBlocks} align={align} />);
      continue;
    }

    const children = renderSpans(block.children, block.markDefs);
    const key = block._key || i;

    // ── Styled blocks ──────────────────────────────────────────────────────────
    switch (block.style) {
      /**
       * H2 — Article section title in brand green
       * Figma: 32px bold #1b6936 lh-56px
       */
      case 'h2':
        output.push(
          <h2
            key={key}
            className={`font-din font-bold text-[#1b6936] text-[32px] leading-[56px] ${textAlign}`}
          >
            {children}
          </h2>
        );
        break;

      /**
       * H3 — Section heading dark
       * Figma: 32px medium #141414 lh-56px
       */
      case 'h3':
        output.push(
          <h3
            key={key}
            className={`font-din font-medium text-[#141414] text-[32px] leading-[56px] ${textAlign}`}
          >
            {children}
          </h3>
        );
        break;

      /**
       * Blockquote — Sub-description / intro paragraph
       * Figma: 24px regular #595959 lh-48px
       */
      case 'blockquote':
        output.push(
          <p
            key={key}
            className={`font-din font-normal text-[#595959] text-[24px] leading-[48px] ${textAlign}`}
          >
            {children}
          </p>
        );
        break;

      /**
       * Normal — Body paragraph
       * Figma: 20px regular #595959 lh-40px
       */
      default:
        output.push(
          <p
            key={key}
            className={`font-din font-normal text-[#595959] text-[20px] leading-[40px] ${textAlign}`}
          >
            {children}
          </p>
        );
    }

    i++;
  }

  return (
    <div
      className={`flex flex-col gap-[64px] w-full ${className}`}
      dir={align}
    >
      {output}
    </div>
  );
}
