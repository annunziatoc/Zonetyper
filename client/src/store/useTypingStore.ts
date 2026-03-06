import { create } from 'zustand'
import type { CharState } from "../types";


//avoid stale closure problem by passing updater
type Updater<T> = (prev: T) => T;

interface TypingState {
    sourceText: string;
    currIdx: number;
    charsArr: CharState[];
    startTime: number;
    endTime: number;
    setSourceText: (text: string) => void;
    setCurrIdx: (fn: Updater<number>) => void;
    setCharsArr: (fn: Updater<CharState[]>) => void;
    setStartTime: (time: number) => void;
    setEndTime: (time: number) => void;
}


const useTypingStore = create<TypingState>((set) => ({
    sourceText: '',
    currIdx: 0,
    charsArr: [],
    startTime: 0,
    endTime: 0,
    setSourceText: ((text: string) => set({ sourceText: text })),
    setCurrIdx: (fn) => set((state) => ({ currIdx: fn(state.currIdx) })),
    setCharsArr: (fn) => set((state) => ({ charsArr: fn(state.charsArr) })),
    setStartTime: (time) => set({startTime: time}),
    setEndTime: (time) => set({endTime: time}),
}))



export default useTypingStore;