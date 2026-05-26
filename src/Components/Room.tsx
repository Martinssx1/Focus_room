import { useNavigate, useParams } from "react-router-dom";
import { useRoom } from "../lib/UseAuth";
import { useEffect, useState } from "react";

export default function Room() {
  type RoomMember = {
    display_name: string;
  };

  const [members, setMembers] = useState<RoomMember[]>([]);
  const navigate = useNavigate();
  const { getRoomMembers, roomName, removeRoomMembership } = useRoom();
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const roomId = id;
    async function handleGetRoomMembers() {
      const { data, error } = await getRoomMembers(roomId);
      if (error) {
        console.error("Error fetching room members:", error);
      }
      if (data) {
        setMembers(data);
      }
    }
    handleGetRoomMembers();
  }, [id, getRoomMembers]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-800">
        <div className="font-semibold">{roomName}</div>

        <button
          onClick={() => {
            if (!id) return;
            removeRoomMembership(id);
            navigate("/dashboard");
          }}
          className="text-sm border px-3 py-1 rounded-lg hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
          Leave Room
        </button>
      </nav>

      {/* MAIN */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* LEFT SIDE */}
        <div className="flex-1 p-6 flex flex-col items-center justify-center">
          {/* USERS */}
          <div className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            👥 {members.map((member) => member.display_name)}
          </div>

          {/* TIMER
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold mb-2">
              {isActive ? timeLeft : "00:00"}
            </h1>

            <p className="text-gray-600 dark:text-gray-400">
              {isActive ? "Focus Mode" : "No active session"}
            </p>
          </div>

          
          {!isActive && (
            <button className="px-6 py-3 bg-black text-white rounded-lg dark:bg-white dark:text-black">
              Start 25 min Session
            </button>
          )}*/}
        </div>

        {/* CHAT PANEL */}
        <div className="w-full md:w-80 border-t md:border-t-0 md:border-l dark:border-gray-800 flex flex-col">
          <div className="p-4 border-b dark:border-gray-800 font-semibold">
            Chat
          </div>

          {/* MESSAGES */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto text-sm">
            <div>
              <span className="font-medium">John:</span> let’s go 🔥
            </div>
            <div>
              <span className="font-medium">Mary:</span> locked in
            </div>
          </div>

          {/* INPUT */}
          <div className="p-4 border-t dark:border-gray-800">
            <input
              placeholder="Send a message..."
              className="w-full px-3 py-2 border rounded-lg text-sm dark:bg-gray-800 dark:border-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
