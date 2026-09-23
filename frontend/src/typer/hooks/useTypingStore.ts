import { create } from 'zustand'

interface CharState {
    char: string;
    status: null | true | false;
    id: string;
}

//logic varies per key press
//expose a generic updater for flexibility
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
    setCurrIdx: (fn: Updater<number>) => void;
    setCharsArr: (fn: Updater<CharState[]>) => void;
    setCurrentQuote: (quote: string) => void;
    addWpmHistory: (entry: { time: number; wpm: number }) => void;
    setSourceText: (text: string) => void;
    setSourceTextId: (id: number) => void;
    setStartTime: (time: number) => void;
    setEndTime: (time: number) => void;
    setFinalWpm: (wpm: number) => void;
    setFinalAcc: (acc: number) => void;
    setFinalDur: (dur: number) => void;
    resetWpmHistory: () => void;
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
    setCurrIdx: (fn) => set((state) => ({ currIdx: fn(state.currIdx) })),
    setCharsArr: (fn) => set((state) => ({ charsArr: fn(state.charsArr) })),
    setCurrentQuote: (quote) => set(({ currentQuote: quote })),
    addWpmHistory: ((entry) => set((state) => ({ wpmHistory: [...state.wpmHistory, { time: entry.time, wpm: entry.wpm }] }))),
    setSourceText: ((text) => set({ sourceText: text })),
    setSourceTextId: ((id) => set({ sourceTextId: id })),
    setStartTime: (time) => set({ startTime: time }),
    setEndTime: (time) => set({ endTime: time }),
    setFinalWpm: (wpm) => set({ finalWpm: wpm }),
    setFinalAcc: (acc) => set({ finalAcc: acc }),
    setFinalDur: (dur) => set({ finalDur: dur }),
    setErrorCount: () => set((state) => ({ errorCount: state.errorCount + 1 })),
    resetWpmHistory: () => set(() => ({ wpmHistory: [] })),
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