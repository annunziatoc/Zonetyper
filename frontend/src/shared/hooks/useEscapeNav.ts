import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useEscapeNav() {
    const navigate = useNavigate();
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                navigate(-1)
            } 
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);
}