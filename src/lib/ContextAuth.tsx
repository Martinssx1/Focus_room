import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import type { User } from "@supabase/supabase-js";
import { AuthContext } from "./UseAuth";
import { useNavigate } from "react-router-dom";

export default function ContextAuth({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUser() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      console.log("Current user context:", session?.user);

      setLoading(false);
    }
    getUser();

    const { data } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null);
    });

    return () => data.subscription.unsubscribe();
  }, []);
  function toggleAuth() {
    setShowAuth((prev) => !prev);
  }

  async function signUp(email: string, password: string, display_name: string) {
    return await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          display_name: display_name,
        },
      },
    });
  }

  async function signIn(Email: string, Password: string) {
    return await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut({ scope: "local" });
    setUser(null);
    navigate("/");
    return { error };
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        setUser,
        user,
        signUp,
        toggleAuth,
        showAuth,
        setShowAuth,
        showSignUp,
        setShowSignUp,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
