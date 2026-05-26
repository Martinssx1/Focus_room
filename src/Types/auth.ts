import type {
  User,
  AuthError,
  AuthResponse,
  PostgrestSingleResponse,
} from "@supabase/supabase-js";
//import type { Database } from "../../database.types";
import type { Dispatch, SetStateAction } from "react";
export type AuthContextType = {
  user: User | null;
  signIn: (Email: string, Password: string) => Promise<AuthResponse>;
  signOut: () => Promise<{ error: AuthError | null }>;
  signUp: (
    Email: string,
    Password: string,
    display_name: string,
  ) => Promise<AuthResponse>;

  toggleAuth: () => void;
  showAuth: boolean;
  setShowAuth: Dispatch<SetStateAction<boolean>>;
  showSignUp: boolean;
  setShowSignUp: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setUser: Dispatch<SetStateAction<User | null>>;
};
/*export type RoomContextType = {
  selectRoom: Database["public"]["Tables"]["roomtable"]["Row"];
  // insertRoom: Database["public"]["Tables"]["roomtable"]["Insert"];
};*/
export type RoomContextType = {
  redirectToRoom: (
    userId: string,
    roomName: string,
  ) => Promise<
    PostgrestSingleResponse<{
      room_id: string;
    } | null>
  >;
  insertRoom: (
    roomName: string,
    userId: string,
  ) => Promise<PostgrestSingleResponse<null>>;
  roomName: string;
  setRoomName: Dispatch<SetStateAction<string>>;
  joinsRoom: (roomCode: string) => Promise<
    PostgrestSingleResponse<{
      room_id: string;
      room_name: string;
    } | null>
  >;
  roomMembership: (
    roomId: string,
    userId: string,
    displayName: string,
  ) => Promise<PostgrestSingleResponse<null>>;
  getRoomMembers: (roomId: string) => Promise<
    PostgrestSingleResponse<
      {
        display_name: string;
      }[]
    >
  >;
  removeRoomMembership: (
    roomId: string,
  ) => Promise<PostgrestSingleResponse<null>>;
};
export type Room = {
  room_id: string;
  room_name: string;
  created_by: string;
  created_at: string;
};

export type RoomInsert = {
  room_name: string;
  created_by: string;
};

export type RoomMember = {
  room_id: string;
  user_id: string;
  joined_at: string;
};
