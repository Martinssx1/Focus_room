import { useContext, createContext } from "react";
import type { AuthContextType, RoomContextType } from "../Types/auth";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContext");
  }
  return context;
}
export const RoomContext = createContext<RoomContextType | undefined>(
  undefined,
);
export function useRoom() {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error("useRoom must be used within a RoomContext");
  }
  return context;
}
