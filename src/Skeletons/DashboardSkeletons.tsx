export function DashboardSkeleton() {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto animate-pulse">
      {/* Actions */}
      <div className="flex gap-4 mb-8">
        <div className="h-12 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
        <div className="h-12 w-32 rounded-lg bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Last Session */}
      <div className="mb-8">
        <div className="h-5 w-40 mb-3 rounded bg-gray-200 dark:bg-gray-700" />

        <div className="p-4 border rounded-lg dark:border-gray-700">
          <div className="h-4 w-52 mb-3 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>

      {/* Rooms */}
      <div className="mb-8">
        <div className="h-5 w-36 mb-3 rounded bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-3">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="p-4 border rounded-lg flex justify-between dark:border-gray-700"
            >
              <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-12 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>

      {/* Active Rooms */}
      <div>
        <div className="h-5 w-40 mb-3 rounded bg-gray-200 dark:bg-gray-700" />

        <div className="space-y-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="p-4 border rounded-lg flex justify-between dark:border-gray-700"
            >
              <div className="h-4 w-48 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-12 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 h-4 w-32 rounded bg-gray-200 dark:bg-gray-700" />

      <div className="mt-10 h-4 w-72 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  );
}
