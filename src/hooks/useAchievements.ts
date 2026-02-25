"use client";

import { useState, useEffect } from "react";
import { Database } from "@/lib/supabase/types";

type Achievement = Database["public"]["Tables"]["achievements"]["Row"];

export function useAchievements() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAchievements() {
      try {
        const response = await fetch("/api/achievements");
        if (!response.ok) {
          throw new Error(`Failed to fetch achievements: ${response.statusText}`);
        }
        const data = await response.json();
        setAchievements(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchAchievements();
  }, []);

  return { achievements, loading, error };
}
