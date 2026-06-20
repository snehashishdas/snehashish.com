export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>Contact</p>
          <p className="text-center md:text-right">
            &copy; {new Date().getFullYear()} Snehashish Das
          </p>
        </div>
      </div>
    </footer>
  )
}
