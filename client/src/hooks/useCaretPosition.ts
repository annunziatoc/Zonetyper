import { useEffect, useState } from "react"

export const useCaretPosition = (caretRef: React.RefObject<HTMLSpanElement | null>, currIdx: number) => {

    const [caretPos, setCaretPos] = useState({ top: 0, left: 0, height: 0, width: 0 })

    useEffect(() => {
        const rect = caretRef.current?.getBoundingClientRect()
        if (!rect) return
        setCaretPos({
            top: rect.top, left: rect.left, height: rect.height,
            width: Math.max(rect.width, 13)
        })
    }, [currIdx])

    useEffect(() => {
        const handleResize = () => {
            const rect = caretRef.current?.getBoundingClientRect()
            if (!rect) return
            setCaretPos({
                top: rect.top, left: rect.left, height: rect.height,
                width: Math.max(rect.width, 13)
            })
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return caretPos;

}