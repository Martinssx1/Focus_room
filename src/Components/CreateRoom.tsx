import { useAuth, useRoom } from "../lib/UseAuth";
import { useNavigate } from "react-router-dom";

import { useState, useRef, type SetStateAction, type Dispatch } from "react";
interface CreateRoomProps {
  setShowCreateRoom: Dispatch<SetStateAction<boolean>>;
  showCreateRoom: boolean;
  setJoinRoom: Dispatch<SetStateAction<boolean>>;
  joinRoom: boolean;
}

export default function CreateRoom({
  setShowCreateRoom,
  showCreateRoom,
  setJoinRoom,
  joinRoom,
}: CreateRoomProps) {
  const { user } = useAuth();
  const {
    redirectToRoom,
    insertRoom,
    roomName,
    setRoomName,
    joinsRoom,
    roomMembership,
  } = useRoom();
  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const favoriteLoadingRef = useRef(false);
  async function handleRoomMembership(roomid: string) {
    if (!user) return;
    const { error } = await roomMembership(
      roomid,
      user.id,
      user.user_metadata.display_name,
    );
    if (error) {
      setError("error inserting values in tables");
      console.error("Room membership error:", error);
    }
  }
  async function handleJoinRoom() {
    if (!roomName.trim()) return;

    const { error, data } = await joinsRoom(roomName);

    if (error) {
      setError("Room not found");
      return;
    }
    if (data) {
      setShowCreateRoom(false);
      navigate(`/room/${data.room_id}`);
      setRoomName(data.room_name);
      await handleRoomMembership(data.room_id);
    }
  }

  async function handleRedirection() {
    if (!user) return;
    const { error, data } = await redirectToRoom( roomName);

    if (error) {
      console.error("Error fetching room:", error);
      setError(error.message);
      return;
    }
    if (data) {
      console.log("Room found, redirecting to:", data.room_id);
      navigate(`/room/${data.room_id}`);
      await handleRoomMembership(data.room_id);
    }
  }

  async function handleCreateRoom() {
    if (!user) return;
    if (!roomName) {
      setError("Please enter a room name.");
      return;
    }
    setLoading(true);
    favoriteLoadingRef.current = true;

    try {
      const { error } = await insertRoom(roomName, user?.id);
      setLoading(false);
      if (error) {
        if (error.code === "23505") {
          setError("Room name already exists. Please choose another name.");
        } else {
          setError(error.message);
        }
        console.error("Room creation error:", error);
        return;
      }

      setSuccess("Room created successfully!");
      setShowCreateRoom(false);
      setJoinRoom(false);
      await handleRedirection();
      console.log("Room created:", roomName);
    } finally {
      setLoading(false);
      favoriteLoadingRef.current = false;
    }
  }

  return (
    <>
      {showCreateRoom && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => {
            setShowCreateRoom(false);
            setJoinRoom(false);
          }}
        >
          <div
            className="bg-white rounded-2xl p-6 w-[90%] max-w-md relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setShowCreateRoom(false);
                setJoinRoom(false);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              ✖
            </button>

            <h2 className="text-2xl font-semibold mb-4 text-center">
              {joinRoom ? "Join Room" : "Create Room"}
            </h2>

            <form
              className="flex flex-col gap-2
             "
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="roomName" className="text-sm font-medium">
                {joinRoom ? "Room Code" : "Room Name"}
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="roomName"
                  placeholder={joinRoom ? "Room Code" : "Room Name"}
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="border p-2 w-full rounded-lg  focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {error && <p className="text-red-500 text-sm mb-1">{error}</p>}
              {success && (
                <p className="text-green-500 text-sm mb-1">{success}</p>
              )}
              {joinRoom ? (
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleJoinRoom}
                  className="bg-black text-white  py-2 cursor-pointer rounded-lg hover:opacity-90 transition"
                >
                  {loading ? (
                    <div className="flex justify-center ">
                      <div className="h-6 w-6 animate-spin rounded-full border-4 border-black border-t-white" />
                    </div>
                  ) : (
                    "Join Room"
                  )}
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleCreateRoom}
                  className="bg-black text-white  py-2 cursor-pointer rounded-lg hover:opacity-90 transition"
                >
                  {loading ? (
                    <div className="flex justify-center ">
                      <div className="h-6 w-6 animate-spin rounded-full border-4 border-black border-t-white" />
                    </div>
                  ) : (
                    "Create Room"
                  )}
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
