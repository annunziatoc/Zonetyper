import { create } from 'zustand'

interface CharState {
    char: string;
    status: null | true | false;
    id: string;
}


//avoid stale closure problem by passing updater
type Updater<T> = (prev: T) => T;

interface TypingState {
    sourceText: string;
    sourceTextId: number;
    currIdx: number;
    charsArr: CharState[];
    startTime: number;
    endTime: number;
    finalWpm: number;
    finalAcc: number;
    finalDur: number;
    errorCount: number;
    currentQuote: string;
    wpmHistory: { time: number; wpm: number }[];
    setCurrentQuote: (quote: string) => void;
    addWpmHistory: (entry: { time: number; wpm: number }) => void;
    resetWpmHistory: () => void;
    setSourceText: (text: string) => void;
    setSourceTextId: (id: number) => void;
    setCurrIdx: (fn: Updater<number>) => void;
    setCharsArr: (fn: Updater<CharState[]>) => void;
    setStartTime: (time: number) => void;
    setEndTime: (time: number) => void;
    setFinalWpm: (wpm: number) => void;
    setFinalAcc: (acc: number) => void;
    setFinalDur: (dur: number) => void;
    setErrorCount: () => void;
    resetErrorCount: () => void;
    resetSession: () => void;
}


const useTypingStore = create<TypingState>((set) => ({
    sourceText: '',
    sourceTextId: 0,
    currIdx: 0,
    charsArr: [],
    startTime: 0,
    endTime: 0,
    finalWpm: 0,
    finalAcc: 0,
    finalDur: 0,
    errorCount: 0,
    wpmHistory: [],
    currentQuote: '',
    setCurrentQuote: (quote: string) => set(({ currentQuote: quote })),
    addWpmHistory: ((entry) => set((state) => ({ wpmHistory: [...state.wpmHistory, { time: entry.time, wpm: entry.wpm }] }))),
    resetWpmHistory: () => set(() => ({ wpmHistory: [] })),
    setSourceText: ((text: string) => set({ sourceText: text })),
    setSourceTextId: ((id: number) => set({ sourceTextId: id })),
    setCurrIdx: (fn) => set((state) => ({ currIdx: fn(state.currIdx) })),
    setCharsArr: (fn) => set((state) => ({ charsArr: fn(state.charsArr) })),
    setStartTime: (time) => set({ startTime: time }),
    setEndTime: (time) => set({ endTime: time }),
    setFinalWpm: (wpm) => set({ finalWpm: wpm }),
    setFinalAcc: (acc) => set({ finalAcc: acc }),
    setFinalDur: (dur) => set({ finalDur: dur }),
    setErrorCount: () => set((state) => ({ errorCount: state.errorCount + 1 })),
    resetErrorCount: () => set({ errorCount: 0 }),
    resetSession: () => set({
        currIdx: 0,
        charsArr: [],
        startTime: 0,
        endTime: 0,
        finalWpm: 0,
        finalAcc: 0,
        finalDur: 0,
        errorCount: 0,
        wpmHistory: [],
    })
}))



export default useTypingStore;