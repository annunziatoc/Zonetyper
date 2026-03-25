
export type CreateTypingSessionDto = {
    sourceTextId: number;
    wpm: number;
    accuracy: number;
    duration: number;
    errorCount: number;
    sourceText: string;
}

export async function submitSession(dto: CreateTypingSessionDto) {

    await fetch("/api/sessions", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto)
    })
}



