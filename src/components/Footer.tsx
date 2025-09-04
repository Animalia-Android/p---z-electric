export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="flex flex-row mx-auto max-w-6xl px-4 py-8 text-sm opacity-80">
        {/* <div>P&Z Electric • Licensed & Insured • NYC</div>
        // <div>© {new Date().getFullYear()} P&Z Electric</div> */}
        {/* // © {YEAR} P&Z Electric • Licensed & Insured • NYC • License #{LICENSE_NUMBER} • (XXX) XXX-XXXX */}
        <span className="mx-auto">
          © {new Date().getFullYear()} P&Z Electric • Licensed & Insured • NYC
        </span>
      </div>
    </footer>
  );
}
