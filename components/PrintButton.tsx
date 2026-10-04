"use client";

// Chrome and Firefox use the page title as the default PDF file name,
// so we set it to something nice just for the time of printing.
export default function PrintButton({ fileName }: { fileName: string }) {
  function print() {
    const original = document.title;
    document.title = fileName;
    window.addEventListener(
      "afterprint",
      () => {
        document.title = original;
      },
      { once: true },
    );
    window.print();
  }

  return (
    <button className="btn primary" onClick={print}>
      Save as PDF
    </button>
  );
}