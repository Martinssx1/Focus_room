export function NavbarSkeleton() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-white dark:bg-gray-900 dark:border-gray-800 animate-pulse">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="h-6 w-28 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
    </nav>
  );
}
