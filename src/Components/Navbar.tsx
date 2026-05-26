import Themebutton from "../Theme/Themebutton";
import { useAuth } from "../lib/UseAuth";

export default function Navbar() {
  const { user, toggleAuth, signOut, loading } = useAuth();
  return (
    <nav className="flex bg-white  items-center font-serif  justify-between px-6 py-4 border-b  dark:bg-gray-900 dark:border-gray-800">
      {/* Left */}
      <div className="text-lg font-bold flex gap-3 text-gray-900 dark:text-white">
        FocusRoom
        <Themebutton />
      </div>

      {/* Right */}
      {loading ? (
        <div className="flex items-center gap-4">
          <div className="h-4 w-40 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      ) : (
        <div className="text-sm text-gray-700 dark:text-gray-300">
          {user ? (
            <div className="flex items-center gap-4">
              <span>Hi, {user.user_metadata.display_name || user.email}</span>
              <button className="hover:underline" onClick={signOut}>
                Sign Out
              </button>
            </div>
          ) : (
            <button className="hover:underline" onClick={toggleAuth}>
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
