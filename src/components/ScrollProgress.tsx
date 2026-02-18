import { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            setScrollProgress(scrolled);
        };

        window.addEventListener('scroll', updateScrollProgress);
        updateScrollProgress();

        return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-900/20">
            <div
                className="h-full gradient-primary transition-all duration-150 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
