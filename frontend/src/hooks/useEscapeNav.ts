import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useEscapeNav(to: string = '/') {
    const navigate = useNavigate();
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') navigate(to);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);
}