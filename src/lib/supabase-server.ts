// ===== START: Server-side Supabase client =====

// ===== START: imports =====
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
// ===== END: imports =====

// ===== START: create server client function =====
export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      // ===== START: get cookies =====
      getAll() {
        return cookieStore.getAll();
      },
      // ===== END: get cookies =====
      // ===== START: set cookies =====
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Server Component cannot set cookies, ignore silently
        }
      },
      // ===== END: set cookies =====
    },
  });
}
// ===== END: create server client function =====

// ===== END: Server-side Supabase client =====
