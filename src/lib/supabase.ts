// ===== START: Browser-side Supabase client =====

// ===== START: imports =====
import { createClient } from "@supabase/supabase-js";
// ===== END: imports =====

// ===== START: read env variables =====
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// ===== END: read env variables =====

// ===== START: create and export client =====
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
// ===== END: create and export client =====

// ===== END: Browser-side Supabase client =====
