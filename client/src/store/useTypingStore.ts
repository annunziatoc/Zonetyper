import { create } from 'zustand'

interface TypingState {
    typingText: string;
    setTypingText: (text: string) => void;
}


const useTypingStore = create<TypingState>((set) => ({
    typingText: '',
    setTypingText: ((text: string) => set({typingText: text}))
}))



export default useTypingStore;