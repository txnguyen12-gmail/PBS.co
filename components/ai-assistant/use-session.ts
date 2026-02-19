"use client";

import { useState, useEffect, useCallback } from "react";

const SESSION_KEY = "pbs_session_id";

export function useSession() {
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    let id = localStorage.getItem(SESSION_KEY);
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem(SESSION_KEY, id);
    }
    setSessionId(id);
  }, []);

  const resetSession = useCallback(() => {
    const newId = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, newId);
    setSessionId(newId);
    return newId;
  }, []);

  return { sessionId, resetSession };
}
