import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { ChevronDown, Check } from 'lucide-react';

function flattenOptionLabel(node) {
  if (node === null || node === undefined || typeof node === 'boolean') return '';
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(flattenOptionLabel).join('');
  if (React.isValidElement(node)) return flattenOptionLabel(node.props?.children);
  return '';
}

export function CustomSelect({
  value,
  onChange,
  onValueChange,
  onBlur,
  name,
  options,
  children,
  placeholder = 'Select...',
  className = '',
  disabled = false,
  title,
  'aria-label': ariaLabel,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, width: 220, flipUp: false });
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  // Normalize options from either `options` prop or `<option>` children
  const parsedOptions = useMemo(() => {
    if (Array.isArray(options) && options.length > 0) {
      return options.map((opt) =>
        typeof opt === 'object' && opt !== null
          ? {
              value: opt.value ?? opt.id,
              label: opt.label ?? String(opt.value ?? opt.id ?? ''),
              badge: opt.badge || null,
              completed: Boolean(opt.completed),
            }
          : { value: opt, label: String(opt), badge: null, completed: false }
      );
    }

    const list = [];
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) return;
      const optValue = child.props.value !== undefined ? child.props.value : flattenOptionLabel(child.props.children);
      const optLabel = flattenOptionLabel(child.props.children).trim();
      list.push({
        value: optValue,
        label: optLabel,
        badge: child.props['data-badge'] || null,
        completed: Boolean(child.props['data-completed']),
      });
    });
    return list;
  }, [options, children]);

  const selectedOption = useMemo(() => {
    const match = parsedOptions.find((o) => String(o.value) === String(value));
    return match || parsedOptions[0] || { value: '', label: placeholder };
  }, [parsedOptions, value, placeholder]);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current || typeof window === 'undefined') return;
    const rect = triggerRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const spaceBelow = vh - rect.bottom;
    const spaceAbove = rect.top;
    const flipUp = spaceBelow < 220 && spaceAbove > spaceBelow;

    const desiredWidth = Math.min(Math.max(rect.width, 200), vw - 24);
    let left = rect.left;
    if (left + desiredWidth > vw - 12) {
      left = Math.max(12, vw - desiredWidth - 12);
    }
    if (left < 12) left = 12;

    setMenuPosition({
      top: flipUp ? rect.top - 6 : rect.bottom + 6,
      left,
      width: desiredWidth,
      flipUp,
    });
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    updatePosition();

    const handleOutsideClick = (e) => {
      if (!(e?.target instanceof Node)) return;
      if (
        triggerRef.current &&
        !triggerRef.current.contains(e.target) &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handleScrollOrResize = (e) => {
      // Do not close or jump if scrolling inside the dropdown menu itself
      if (menuRef.current && e?.target instanceof Node && menuRef.current.contains(e.target)) return;
      updatePosition();
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleScrollOrResize);
    window.addEventListener('scroll', handleScrollOrResize, true);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleScrollOrResize);
      window.removeEventListener('scroll', handleScrollOrResize, true);
    };
  }, [isOpen, updatePosition]);

  const handleSelect = (optValue) => {
    setIsOpen(false);
    const syntheticEvent = {
      target: { name, value: optValue },
      currentTarget: { name, value: optValue },
    };
    if (onChange) onChange(syntheticEvent);
    if (onValueChange) onValueChange(optValue);
    if (onBlur) {
      setTimeout(() => onBlur(syntheticEvent), 0);
    }
  };

  // Strip native-select-only padding/appearance classes so flex layout is always clean
  const cleanedClassName = className
    .replace(/\bappearance-none\b/g, '')
    .replace(/\bpr-\d+(\.\d+)?\b/g, '')
    .trim();

  const defaultBaseClasses =
    'flex items-center justify-between gap-2.5 text-left select-none transition-all cursor-pointer focus:outline-none max-w-full min-w-0 overflow-hidden';

  const fallbackSurfaceClasses = cleanedClassName
    ? ''
    : 'w-full px-3.5 py-2 rounded-xl bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-default)] hover:border-[var(--accent-primary)] text-xs sm:text-sm font-medium shadow-2xs';

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        disabled={disabled}
        title={title}
        aria-label={ariaLabel || title || selectedOption?.label}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => {
          if (disabled) return;
          if (!isOpen) updatePosition();
          setIsOpen((prev) => !prev);
        }}
        className={`${defaultBaseClasses} ${fallbackSurfaceClasses} ${cleanedClassName} ${
          isOpen ? 'border-[var(--accent-primary)] ring-1 ring-[var(--accent-primary)]/30' : ''
        } ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        <span className="truncate flex-1 min-w-0 flex items-center gap-1.5">
          {selectedOption?.completed && (
            <span className="text-[var(--accent-primary)] font-bold shrink-0">✓</span>
          )}
          <span className="truncate">{selectedOption?.label || placeholder}</span>
          {selectedOption?.badge && (
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
              {selectedOption.badge}
            </span>
          )}
        </span>
        <ChevronDown
          size={15}
          className={`shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[var(--accent-primary)]' : ''
          }`}
        />
      </button>

      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={menuRef}
            role="listbox"
            style={{
              position: 'fixed',
              top: menuPosition.flipUp ? 'auto' : `${menuPosition.top}px`,
              bottom: menuPosition.flipUp ? `${window.innerHeight - menuPosition.top}px` : 'auto',
              left: `${menuPosition.left}px`,
              width: `${menuPosition.width}px`,
              zIndex: 200,
            }}
            className="rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-default)] shadow-xl p-1.5 max-h-68 overflow-y-auto animate-in fade-in zoom-in-95 duration-120"
            onClick={(e) => e.stopPropagation()}
          >
            {parsedOptions.map((opt) => {
              const isSelected = String(opt.value) === String(selectedOption?.value);
              return (
                <button
                  key={String(opt.value)}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(opt.value)}
                  className={`w-full flex items-center justify-between gap-2.5 px-3 py-2 rounded-xl text-left text-xs sm:text-sm transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] font-semibold'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-hover)] hover:text-[var(--text-primary)] font-medium'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0 flex-1">
                    {opt.completed && (
                      <span className="text-[var(--accent-primary)] font-bold shrink-0">✓</span>
                    )}
                    <span className="leading-snug break-words min-w-0 flex-1">{opt.label}</span>
                    {opt.badge && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-[var(--bg-surface)] text-[var(--text-secondary)] border border-[var(--border-subtle)] shrink-0">
                        {opt.badge}
                      </span>
                    )}
                  </div>
                  {isSelected && (
                    <Check size={14} className="text-[var(--accent-primary)] shrink-0" />
                  )}
                </button>
              );
            })}
          </div>,
          document.body
        )}
    </>
  );
}

export default CustomSelect;
