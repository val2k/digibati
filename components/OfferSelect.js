"use client";

import { useEffect, useRef, useState } from "react";

const offers = [
  {
    name: "Site essentiel",
    price: "690 € HT",
    description: "Une page pour démarrer",
  },
  {
    name: "Site multipage",
    price: "1 290 € HT",
    description: "Jusqu’à 6 pages services, blog et réalisations en option",
  },
  {
    name: "Site sur mesure",
    price: "Dès 2 490 € HT",
    description: "Un site pensé autour de votre entreprise",
  },
  {
    name: "Je souhaite être conseillé",
    description: "Trouvons la formule adaptée",
  },
];

function getMenuPlacement(trigger) {
  const bounds = trigger.getBoundingClientRect();
  const viewport = window.visualViewport;
  const top = viewport?.offsetTop ?? 0;
  const bottom = top + (viewport?.height ?? window.innerHeight);
  const above = bounds.top - top - 16;
  const below = bottom - bounds.bottom - 16;
  const side = below < 240 && above > below ? "top" : "bottom";

  return {
    side,
    maxHeight: Math.max(80, Math.min(240, side === "top" ? above : below)),
  };
}

export default function OfferSelect({ value, onChange }) {
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const searchRef = useRef({ text: "", time: 0 });
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [invalid, setInvalid] = useState(false);
  const [placement, setPlacement] = useState({ side: "bottom", maxHeight: 240 });
  const selectedIndex = offers.findIndex((offer) => offer.name === value);
  const selected = offers[selectedIndex];
  const hasError = invalid && !selected;

  useEffect(() => {
    const dialog = rootRef.current.closest("dialog");
    const closeMenu = () => setIsOpen(false);
    dialog?.addEventListener("close", closeMenu);
    return () => dialog?.removeEventListener("close", closeMenu);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function dismissOutside(event) {
      if (!rootRef.current.contains(event.target)) setIsOpen(false);
    }
    function updatePlacement() {
      setPlacement(getMenuPlacement(triggerRef.current));
    }

    const dialog = rootRef.current.closest("dialog");
    document.addEventListener("pointerdown", dismissOutside);
    window.addEventListener("resize", updatePlacement);
    window.visualViewport?.addEventListener("resize", updatePlacement);
    dialog?.addEventListener("scroll", updatePlacement);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      window.removeEventListener("resize", updatePlacement);
      window.visualViewport?.removeEventListener("resize", updatePlacement);
      dialog?.removeEventListener("scroll", updatePlacement);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const menu = menuRef.current;
    const option = menu.children[activeIndex];
    // Scroll only the options, without moving the form underneath the menu.
    if (option.offsetTop < menu.scrollTop) menu.scrollTop = option.offsetTop;
    if (option.offsetTop + option.offsetHeight > menu.scrollTop + menu.clientHeight) {
      menu.scrollTop = option.offsetTop + option.offsetHeight - menu.clientHeight;
    }
  }, [activeIndex, isOpen, placement.maxHeight]);

  function openMenu(index = Math.max(selectedIndex, 0)) {
    setPlacement(getMenuPlacement(triggerRef.current));
    setActiveIndex(index);
    setIsOpen(true);
  }

  function choose(index) {
    onChange(offers[index].name);
    setInvalid(false);
    setIsOpen(false);
  }

  function handleKeyDown(event) {
    const { key } = event;
    if (key === "Escape" && isOpen) {
      // The first Escape closes the options; the next can close the dialog.
      event.preventDefault();
      event.stopPropagation();
      setIsOpen(false);
    } else if (key === "Tab") {
      if (isOpen) choose(activeIndex);
    } else if (key === "Enter" || key === " ") {
      event.preventDefault();
      if (isOpen) choose(activeIndex);
      else openMenu();
    } else if (key === "ArrowDown" || key === "ArrowUp") {
      event.preventDefault();
      if (!isOpen) openMenu();
      else if (event.altKey && key === "ArrowUp") choose(activeIndex);
      else setActiveIndex((index) => Math.max(0, Math.min(offers.length - 1, index + (key === "ArrowDown" ? 1 : -1))));
    } else if (["Home", "End", "PageUp", "PageDown"].includes(key)) {
      event.preventDefault();
      openMenu(key === "Home" || key === "PageUp" ? 0 : offers.length - 1);
    } else if (key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      const now = Date.now();
      const previous = now - searchRef.current.time < 700 ? searchRef.current.text : "";
      const text = previous + key.toLocaleLowerCase("fr");
      searchRef.current = { text, time: now };
      const query = [...text].every((character) => character === text[0]) ? text[0] : text;
      const start = query.length === 1 ? (isOpen ? activeIndex : selectedIndex) + 1 : 0;
      for (let offset = 0; offset < offers.length; offset++) {
        const index = (start + offset) % offers.length;
        if (offers[index].name.toLocaleLowerCase("fr").startsWith(query)) {
          openMenu(index);
          break;
        }
      }
    }
  }

  return (
    <div className="contact-field contact-field-wide">
      <label id="contact-offer-label" htmlFor="contact-offer">Type d’offre</label>
      <div className="offer-select" ref={rootRef}>
        <select
          name="offer"
          value={value}
          hidden
          aria-hidden="true"
          tabIndex={-1}
          required
          onChange={(event) => {
            onChange(event.target.value);
            setInvalid(false);
          }}
          onInvalid={(event) => {
            event.preventDefault();
            setInvalid(true);
            triggerRef.current.focus();
          }}
        >
          <option value="" disabled>Choisissez une offre</option>
          {offers.map((offer) => <option key={offer.name} value={offer.name}>{offer.name}</option>)}
        </select>
        <button
          ref={triggerRef}
          id="contact-offer"
          type="button"
          role="combobox"
          className="offer-select-trigger"
          aria-labelledby="contact-offer-label"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={isOpen ? "contact-offer-options" : undefined}
          aria-activedescendant={isOpen ? `contact-offer-option-${activeIndex}` : undefined}
          aria-required="true"
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? "contact-offer-error" : undefined}
          data-placeholder={!selected}
          onClick={() => isOpen ? setIsOpen(false) : openMenu()}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsOpen(false)}
        >
          <span className="offer-select-value">
            <span className="offer-select-name">{selected?.name ?? "Choisissez une offre"}</span>
            {selected?.price && <span className="offer-select-price">{selected.price}</span>}
          </span>
          <svg className="offer-select-chevron" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        {isOpen && (
          <div
            ref={menuRef}
            id="contact-offer-options"
            className="offer-select-menu"
            role="listbox"
            aria-labelledby="contact-offer-label"
            data-side={placement.side}
            style={{ "--offer-menu-max-height": `${placement.maxHeight}px` }}
          >
            {offers.map((offer, index) => (
              <div
                key={offer.name}
                id={`contact-offer-option-${index}`}
                className="offer-select-option"
                role="option"
                aria-selected={value === offer.name}
                data-active={activeIndex === index}
                onPointerMove={() => setActiveIndex(index)}
                onPointerDown={(event) => event.preventDefault()}
                onClick={() => choose(index)}
              >
                <span className="offer-select-option-content">
                  <span className="offer-select-option-name">{offer.name}</span>
                  <span className="offer-select-option-description">{offer.description}</span>
                </span>
                <span className="offer-select-option-price">{offer.price}</span>
                <svg className="offer-select-check" aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 4 4L19 6" />
                </svg>
              </div>
            ))}
          </div>
        )}
      </div>
      {hasError && <p id="contact-offer-error" className="offer-select-error" role="alert">Choisissez une offre, ou demandez conseil.</p>}
    </div>
  );
}
