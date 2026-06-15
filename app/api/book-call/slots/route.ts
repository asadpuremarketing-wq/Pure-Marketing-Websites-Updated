import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const date = req.nextUrl.searchParams.get("date");
  if (!date) return NextResponse.json({ booked: [] });

  const { data, error } = await getSupabase()
    .from("bookings")
    .select("booking_time")
    .eq("booking_date", date);

  if (error) {
    console.error("Slots fetch error:", error);
    return NextResponse.json({ booked: [] });
  }

  return NextResponse.json({ booked: (data ?? []).map((r) => r.booking_time) });
}
