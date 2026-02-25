"use client";

import { useState, useEffect } from "react";
import { Database } from "@/lib/supabase/types";

type Intel = Database["public"]["Tables"]["intels"]["Row"];

export function useIntels() {
  const [intels, setIntels] = useState<Intel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchIntels() {
      try {
        const response = await fetch("/api/intels");
        if (!response.ok) {
          throw new Error(`Failed to fetch intels: ${response.statusText}`);
        }
        const data = await response.json();
        setIntels(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchIntels();
  }, []);

  return { intels, loading, error };
}
