const API_BASE = import.meta.env.VITE_API_BASE_URL;


export type LeaderboardEntryDto = {
    wpm: number;
    accuracy: number;
}

export async function getLeaderboardStats(): Promise<LeaderboardEntryDto[]> {
    const res = await fetch(`${API_BASE}/api/sessions/leaderboard`)
    return res.json()
}