import SignIn from "./Signin";
import { useAuth } from "../lib/UseAuth";
import { DashboardSkeleton } from "../Skeletons/DashboardSkeletons";
export default function LandingPage() {
  const { setShowSignUp, setShowAuth, loading } = useAuth();

  return (
    <>
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <div className="min-h-screen flex flex-col  bg-gray-200 dark:bg-gray-900 text-gray-900">
          <SignIn />

          <main className="flex text-gray-600 dark:text-gray-400 flex-col items-center justify-center text-center px-6 py-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Focused Together
            </h1>

            <p className=" max-w-xl mb-8">
              Join rooms. Work in sync. Build discipline.
            </p>

            <div className="flex gap-4 dark:text-white font-medium text-black ">
              <button
                onClick={() => {
                  setShowAuth(true);
                  setShowSignUp(true);
                }}
                className="px-6 py-3 border  bg-gray-600  rounded-lg dark:bg-black text-sm hover:opacity-90 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Get Started
              </button>

              <button
                onClick={() => {
                  setShowAuth(true);
                }}
                className="px-6 py-3 border rounded-lg  bg-gray-600 dark:bg-black text-sm hover:opacity-90 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                Login
              </button>
            </div>
          </main>

          {/* Features Section */}
          <section className="border-t px-6 py-12 bg-gray-50 dark:bg-gray-800 dark:border-gray-800">
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="font-semibold mb-2">Real-time Rooms</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Join others and stay accountable in shared spaces.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Focus Timer</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Sync your work sessions with everyone in the room.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Stay Accountable</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Build discipline by working alongside others.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
