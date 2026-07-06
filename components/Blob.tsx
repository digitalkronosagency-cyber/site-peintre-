/**
 * Forme organique décorative utilisée en fond de section.
 * La couleur suit `currentColor` : contrôlée via une classe `text-*`.
 */
export default function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M45.3,-58.5C58.5,-49.7,68.2,-33.6,72.1,-16.2C76,1.3,74.1,20.1,65.6,35.2C57.1,50.3,42,61.7,25.3,68.2C8.6,74.7,-9.7,76.3,-26.4,71.1C-43.1,65.9,-58.2,53.9,-67.6,38.1C-77,22.3,-80.7,2.7,-76.9,-14.9C-73.1,-32.6,-61.8,-48.3,-47.1,-57.4C-32.3,-66.5,-16.2,-69,0.9,-70.2C17.9,-71.5,35.8,-71.4,45.3,-58.5Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
