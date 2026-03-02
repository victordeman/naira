"use server";

import { createClient } from "@/utils/supabase/server";

export async function getSiteContent(sectionType: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("site_content")
    .select("*")
    .eq("section_type", sectionType)
    .order("order", { ascending: true });

  if (error) {
    console.error("Error fetching site content:", error);
    return [];
  }

  return data;
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/confirm`,
    },
  });

  if (error) {
    return { error: error.message };
  }

  return { success: true };
}

export async function getXRModules() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("xr_modules")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching XR modules:", error);
    return [];
  }

  return data;
}

export async function getResearchProjects() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("research_projects")
    .select("*, profiles(full_name)")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching research projects:", error);
    return [];
  }

  return data;
}
