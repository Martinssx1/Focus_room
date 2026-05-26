import { useState } from "react";
import { RoomContext } from "./UseAuth";
import { supabase } from "./supabaseClient";
import { useAuth } from "./UseAuth";

export default function ContextRoom({
  children,
}: {
  children: React.ReactNode;
}) {
  const [roomName, setRoomName] = useState("");
  const { user } = useAuth();
  async function redirectToRoom(roomName: string) {
    return await supabase
      .from("roomtable")
      .select("room_id")
      .eq("room_name", roomName)

      .maybeSingle();
  }
  async function insertRoom(roomName: string, userId: string) {
    return await supabase
      .from("roomtable")
      .insert({ room_name: roomName, created_by: userId });
  }
  async function joinsRoom(roomCode: string) {
    return await supabase
      .from("roomtable")
      .select("room_id,room_name")
      .eq("room_id", roomCode)
      .maybeSingle();
  }
  async function roomMembership(
    roomId: string,
    userId: string,
    displayName: string,
  ) {
    console.log({
      roomId,
      userId,
      displayName,
    });

    return await supabase.from("roommembers").insert({
      room_id: roomId,
      user_id: userId,
      display_name: displayName,
    });
  }
  async function removeRoomMembership(roomId: string) {
    return await supabase
      .from("roommembers")
      .delete()
      .eq("room_id", roomId)
      .eq("user_id", user?.id);
  }
  async function getRoomMembers(roomId: string) {
    return await supabase
      .from("roommembers")
      .select("display_name")
      .eq("room_id", roomId);
  }
  return (
    <RoomContext.Provider
      value={{
        redirectToRoom,
        insertRoom,
        roomName,
        setRoomName,
        joinsRoom,
        roomMembership,
        getRoomMembers,
        removeRoomMembership,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
}
