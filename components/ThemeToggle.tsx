"use client";

export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // storage can be blocked (private mode); the theme still changes for this visit
    }
  }

  return (
    <button className="btn" onClick={toggle}>
      <span className="when-light">Dark theme</span>
      <span className="when-dark">Light theme</span>
    </button>
  );
}
