import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qreadbjvjwofgrywbuhq.supabase.co";
const supabaseKey = "sb_publishable_pVX4IVO-YZReW97mPubpog_A3JikiVJ";

export const supabase = createClient(supabaseUrl, supabaseKey);
