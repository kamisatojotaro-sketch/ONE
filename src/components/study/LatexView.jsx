import React, { useMemo } from 'react';
import katex from 'katex';

// Helper to clean malformed LaTeX escapes (e.g., literal tabs from \text, \u000bec from \vec)
function cleanLatexMath(math) {
  if (!math) return '';
  return math
    .replace(/\u000bec/g, '\\vec')
    .replace(/[\t\s]ext\{/g, '\\text{')
    .replace(/(^|[^\\])text\{/g, '$1\\text{')
    .replace(/(^|[^\\a-zA-Z])ext\{/g, '$1\\text{');
}

/**
 * Safely renders a LaTeX mathematical expression using KaTeX.
 * Supports both display (block, centered) and inline math modes.
 */
export function MathBlock({ math, display = false, className = '' }) {
  const rendered = useMemo(() => {
    if (!math || typeof math !== 'string') return '';
    try {
      const cleaned = cleanLatexMath(math.trim());
      return katex.renderToString(cleaned, {
        displayMode: display,
        throwOnError: false,
        output: 'htmlAndMathml'
      });
    } catch (err) {
      console.warn('KaTeX render error:', err);
      return math;
    }
  }, [math, display]);

  if (!rendered) return null;

  return (
    <span
      className={`katex-render ${display ? 'block my-3 text-center overflow-x-auto py-1 scrollbar-none' : 'inline-block align-middle px-0.5'} ${className}`}
      dangerouslySetInnerHTML={{ __html: rendered }}
    />
  );
}

function renderTextWithBold(text) {
  if (!text) return null;
  if (!text.includes('**')) return text;

  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-bold text-[var(--text-primary)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

/**
 * Formats a block of text containing embedded LaTeX syntax:
 * - $$math$$ for block display math
 * - $math$ for inline math
 * - Standard markdown bold (**text**) - strips asterisks and renders clean bold
 */
export function FormattedLatex({ content, className = '' }) {
  if (!content || typeof content !== 'string') return null;

  // Split by $$...$$ first, then $...$
  const segments = useMemo(() => {
    const parts = [];
    // Regular expression matching $$...$$ (display) or $...$ (inline)
    const regex = /(\$\$[\s\S]+?\$\$|\$[^\$\n]+?\$)/g;
    let lastIdx = 0;
    let match;

    while ((match = regex.exec(content)) !== null) {
      if (match.index > lastIdx) {
        parts.push({ type: 'text', val: content.slice(lastIdx, match.index) });
      }

      const raw = match[0];
      if (raw.startsWith('$$') && raw.endsWith('$$')) {
        parts.push({ type: 'display-math', val: raw.slice(2, -2) });
      } else if (raw.startsWith('$') && raw.endsWith('$')) {
        parts.push({ type: 'inline-math', val: raw.slice(1, -1) });
      }

      lastIdx = regex.lastIndex;
    }

    if (lastIdx < content.length) {
      parts.push({ type: 'text', val: content.slice(lastIdx) });
    }

    return parts;
  }, [content]);

  return (
    <span className={`leading-relaxed ${className}`}>
      {segments.map((seg, i) => {
        if (seg.type === 'display-math') {
          return <MathBlock key={i} math={seg.val} display={true} />;
        }
        if (seg.type === 'inline-math') {
          return <MathBlock key={i} math={seg.val} display={false} />;
        }
        return <span key={i}>{renderTextWithBold(seg.val)}</span>;
      })}
    </span>
  );
}

export default FormattedLatex;
