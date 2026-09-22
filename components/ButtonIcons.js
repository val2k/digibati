export function ConversationIcon({ className = "size-5 shrink-0" }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`conversation-icon ${className}`}
    >
      <path d="M21 11.5c0 4.7-4.03 8.5-9 8.5a10.4 10.4 0 0 1-4.26-.9L3 21l1.37-3.65A8 8 0 0 1 3 11.5C3 6.8 7.03 3 12 3s9 3.8 9 8.5Z" />
      <circle cx="8" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="16" cy="12" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function EyeIcon({ className = "size-5 shrink-0" }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6S2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </svg>
  );
}
