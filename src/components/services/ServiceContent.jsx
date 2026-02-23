/** Render inline marks (strong, em, link) around a text span */
function renderMark(mark, markDefs, children) {
  if (mark === 'strong') return <strong className="font-bold text-[#0b2c16]">{children}</strong>;
  if (mark === 'em') return <em className="italic">{children}</em>;
  const def = markDefs?.find((d) => d._key === mark);
  if (def?._type === 'link') {
    return (
      <a
        href={def.href}
        target={def.blank ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className="text-[#1B6936] underline underline-offset-2 hover:text-[#0d4020] transition-colors"
      >
        {children}
      </a>
    );
  }
  return children;
}

/** Render children spans of a block, applying marks recursively */
function renderSpans(spans, markDefs) {
  return spans?.map((span, i) => {
    if (span._type !== 'span') return null;
    let node = span.text;
    const marks = span.marks || [];
    for (let m = marks.length - 1; m >= 0; m--) {
      node = renderMark(marks[m], markDefs, node);
    }
    return <span key={i}>{node}</span>;
  });
}

/** Map Sanity block list items into JSX */
function renderListItems(items, listItem) {
  return items.map((item, i) => (
    <li
      key={i}
      className="flex items-start gap-3 font-din text-grey-600 text-base leading-7 lg:text-lg lg:leading-8"
    >
      {listItem === 'bullet' ? (
        <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[#1B6936]" aria-hidden />
      ) : (
        <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#1B6936] text-white text-xs flex items-center justify-center font-bold">
          {i + 1}
        </span>
      )}
      <span>{renderSpans(item.children, item.markDefs)}</span>
    </li>
  ));
}

/**
 * BlockContent — renders a Sanity Portable Text array without an external package.
 * Handles: normal, h2, h3, blockquote, bullet/number lists.
 */
function BlockContent({ blocks }) {
  if (!Array.isArray(blocks)) return null;

  const output = [];
  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    if (block._type !== 'block') {
      i++;
      continue;
    }

    // Collect consecutive list items
    if (block.listItem) {
      const listItem = block.listItem;
      const listBlocks = [];
      while (i < blocks.length && blocks[i].listItem === listItem) {
        listBlocks.push(blocks[i]);
        i++;
      }
      const ListTag = listItem === 'number' ? 'ol' : 'ul';
      output.push(
        <ListTag key={`list-${i}`} className="list-none flex flex-col gap-3 my-4">
          {renderListItems(listBlocks, listItem)}
        </ListTag>
      );
      continue;
    }

    const content = renderSpans(block.children, block.markDefs);
    const key = block._key || i;

    switch (block.style) {
      case 'h2':
        output.push(
          <h2 key={key} className="font-din font-bold text-[#0b2c16] text-2xl leading-snug lg:text-3xl lg:leading-tight mt-8 mb-4">
            {content}
          </h2>
        );
        break;
      case 'h3':
        output.push(
          <h3 key={key} className="font-din font-semibold text-[#0b2c16] text-xl leading-snug lg:text-2xl lg:leading-tight mt-6 mb-3">
            {content}
          </h3>
        );
        break;
      case 'blockquote':
        output.push(
          <blockquote key={key} className="border-r-4 border-[#1B6936] pr-6 my-6 text-grey-600 italic font-din text-lg leading-8">
            {content}
          </blockquote>
        );
        break;
      default:
        output.push(
          <p key={key} className="font-din font-normal text-grey-600 text-base leading-8 lg:text-xl lg:leading-10">
            {content}
          </p>
        );
    }

    i++;
  }

  return <>{output}</>;
}

/**
 * ServiceContent — renders service description and rich-text blocks.
 * The right CTA sidebar and left services nav are managed by the page layout.
 * Server component.
 */
export function ServiceContent({ description, content, locale }) {
  const isRTL = locale === 'ar';

  return (
    <div
      className="flex flex-col gap-8"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Description block */}
      {description && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2" aria-hidden>
            <div className="w-1.5 h-1.5 rounded-full bg-[#1B6936]" />
            <div className="w-10 h-1.5 rounded-sm bg-[#1B6936]" />
          </div>
          <p className="font-din font-normal text-grey-600 text-lg leading-9 lg:text-2xl lg:leading-[48px]">
            {description}
          </p>
        </div>
      )}

      {/* Divider */}
      {description && content?.length > 0 && (
        <div className="h-px w-full bg-[#eaeaea]" />
      )}

      {/* Rich text blocks */}
      {content?.length > 0 && (
        <article className="flex flex-col gap-6">
          <BlockContent blocks={content} />
        </article>
      )}
    </div>
  );
}
