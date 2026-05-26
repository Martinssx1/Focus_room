import { useState } from "react";
import CreateRoom from "./CreateRoom";
export default function Dashboard() {
  const [showRoomInput, setShowRoomInput] = useState(false);
  const [joinRoom, setJoinRoom] = useState(false);

  function toggleCreateRoom() {
    setShowRoomInput((prev) => !prev);
  }

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      <CreateRoom
        showCreateRoom={showRoomInput}
        setShowCreateRoom={setShowRoomInput}
        setJoinRoom={setJoinRoom}
        joinRoom={joinRoom}
      />
      {/* Actions */}
      <div className="flex gap-4 mb-8">
        <button
          onClick={toggleCreateRoom}
          className="px-5 py-3 bg-black dark:bg-gray-800 text-white rounded-lg  dark:text-black"
        >
          Create Room
        </button>

        <button
          onClick={() => {
            toggleCreateRoom();
            setJoinRoom(true);
          }}
          className="px-5 py-3 dark:bg-gray-800 border rounded-lg dark:border-gray-700"
        >
          Join Room
        </button>
      </div>

      {/* Last Session */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">🔥 Last Session</h2>
        <div className="p-4 border rounded-lg dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Room: Frontend Grind
          </p>
          <button className="mt-2 text-sm underline">Rejoin</button>
        </div>
      </div>

      {/* Rooms */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">📂 Your Rooms</h2>
        <div className="space-y-3">
          <div className="p-4 border rounded-lg flex justify-between dark:border-gray-700">
            <span>Frontend Grind</span>
            <button className="text-sm underline">Join</button>
          </div>
        </div>
      </div>

      {/* Active Rooms */}
      <div>
        <h2 className="font-semibold mb-2">👥 Active Rooms</h2>
        <div className="space-y-3">
          <div className="p-4 border rounded-lg flex justify-between dark:border-gray-700">
            <span>John → Coding Room</span>
            <button className="text-sm underline">Join</button>
          </div>
        </div>
      </div>
      <a href="/join" className="text-sm underline">
        Join with Code
      </a>
      <div className="mt-10 text-sm text-gray-500 dark:text-gray-400">
        disclaimer: This is a demo dashboard. Rooms and sessions are not real.
      </div>
    </div>
  );
}
