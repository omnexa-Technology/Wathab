/**
 * AboutContent Molecule
 * Renders multiple paragraphs with consistent spacing
 */

import { Paragraph } from '../../../components/atoms/Paragraph/Paragraph';

export function AboutContent({
  paragraphs = [],
  className = ''
}) {
  if (!paragraphs || paragraphs.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col items-start gap-16 w-full ${className}`}>
      
        {paragraphs.map((text, index) => (

          <Paragraph
            key={index}
            variant="text-32regular"
            className="w-full text-[#595959] text-start"
          >
            {text}
          </Paragraph>
        ))}
      
    </div>
  );
}
