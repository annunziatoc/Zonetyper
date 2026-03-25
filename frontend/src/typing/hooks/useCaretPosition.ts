import { useEffect, useState } from "react"

export const useCaretPosition = (
    caretRef: React.RefObject<HTMLSpanElement | null>,
    currIdx: number,
    charsLen: number,
    containerRef: React.RefObject<HTMLDivElement | null>) => {

    const [caretPos, setCaretPos] = useState({ top: 0, left: 0, height: 0, width: 0 })

    const measure = () => {
        const containerRect = containerRef.current?.getBoundingClientRect()
        const caretRect = caretRef.current?.getBoundingClientRect()
        if (!containerRect || !caretRect) return
        setCaretPos({
            top: caretRect.top - containerRect.top,
            left: caretRect.left - containerRect.left,
            height: caretRect.height,
            width: caretRect.width > 10 ? caretRect.width : 13
        })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { measure() }, [currIdx, charsLen])
    useEffect(() => {
        window.addEventListener('resize', measure)
        return () => window.removeEventListener('resize', measure)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return caretPos;

}