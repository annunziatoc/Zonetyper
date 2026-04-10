const API_BASE = import.meta.env.VITE_API_BASE_URL;

export type CreateTypingSessionDto = {
    sourceTextId: number;
    wpm: number;
    accuracy: number;
    duration: number;
    errorCount: number;
    sourceText: string;
}

export async function submitSession(dto: CreateTypingSessionDto) {

    const res = await fetch(`${API_BASE}/api/sessions`, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto)
    })

    if (!res.ok) {
        throw new Error(`Failed to submit session: ${res.status}`)
    }
}



