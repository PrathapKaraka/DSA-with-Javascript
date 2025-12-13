export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
        <p>© {currentYear} DSA with JavaScript. All rights reserved.</p>
        <p>
          Made with ❤️ by{' '}
          <span className="font-medium text-foreground">Prathap Karaka</span>
        </p>
      </div>
    </footer>
  );
}
