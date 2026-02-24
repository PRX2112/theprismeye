import { useEffect, useRef, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const rafRef = useRef<number>();

    useEffect(() => {
        const updateScrollProgress = () => {
            // Cancel any pending frame before scheduling a new one
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            rafRef.current = requestAnimationFrame(() => {
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                if (scrollHeight > 0) {
                    setScrollProgress((window.scrollY / scrollHeight) * 100);
                }
            });
        };

        // passive: true lets the browser scroll on its own thread without waiting for the handler
        window.addEventListener('scroll', updateScrollProgress, { passive: true });
        updateScrollProgress();

        return () => {
            window.removeEventListener('scroll', updateScrollProgress);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-900/20">
            <div
                className="h-full gradient-primary transition-none"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
