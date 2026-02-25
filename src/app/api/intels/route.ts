import { NextResponse } from "next/server";
import { createClient as createSupabaseClient } from "@/lib/supabase/server";
import { Database } from "@/lib/supabase/types";

export async function GET() {
  try {
    const supabase = await createSupabaseClient();
    const { data, error } = await supabase
      .from("intels")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching intels:", error);
      return NextResponse.json(
        { error: "Failed to fetch intels" },
        { status: 500 }
      );
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // Admin role check
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    if ((profile as any)?.role !== "admin") {
      return NextResponse.json(
        { error: "Forbidden: Admin access required" },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { slug, title, excerpt, content, tag, date, image } = body;

    if (!slug || !title || !excerpt || !content || !tag || !date || !image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const intel = {
      slug,
      title,
      excerpt,
      content,
      tag,
      date,
      image,
    };

    const { data, error } = await (supabase as any)
      .from("intels")
      .insert(intel)
      .select()
      .single();

    if (error) {
      console.error("Error creating intel:", error);
      return NextResponse.json(
        { error: error.message || "Failed to create intel" },
        { status: 500 }
      );
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
