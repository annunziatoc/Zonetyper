const API_BASE = import.meta.env.VITE_API_BASE_URL;

export type userStatsDto = {
    topSpeed: number;
    recentStats: {
        id: number;
        wpm: number;
        accuracy: number;
        duration: number;
        errorCount: number;
        completedAt: string;
        sourceText: string
    }[];
}

export async function getUserStats (): Promise<userStatsDto> {

    const res = await fetch(`${API_BASE}/api/sessions/stats`)

    if (!res.ok) {
        throw new Error(`Failed to fetch user stats: ${res.status}`)
    }
    
    return res.json()
}
