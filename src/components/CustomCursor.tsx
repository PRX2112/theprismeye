import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
    // All mutable position data lives in refs — no re-renders on mouse move
    const posRef = useRef({ x: 0, y: 0 });
    const followerRef = useRef({ x: 0, y: 0 });
    const dotEl = useRef<HTMLDivElement>(null);
    const ringEl = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>();
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            posRef.current = { x: e.clientX, y: e.clientY };
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            setIsHovering(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                !!target.closest('a') ||
                !!target.closest('button') ||
                target.classList.contains('cursor-pointer')
            );
        };

        // Single stable rAF loop — writes directly to DOM via refs
        const tick = () => {
            const pos = posRef.current;
            const fol = followerRef.current;

            // Lerp follower toward cursor
            fol.x += (pos.x - fol.x) * 0.2;
            fol.y += (pos.y - fol.y) * 0.2;

            if (dotEl.current) {
                dotEl.current.style.left = `${pos.x}px`;
                dotEl.current.style.top = `${pos.y}px`;
            }
            if (ringEl.current) {
                ringEl.current.style.left = `${fol.x}px`;
                ringEl.current.style.top = `${fol.y}px`;
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);
        rafRef.current = requestAnimationFrame(tick);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []); // empty deps — registers exactly once

    return (
        <>
            <div
                ref={dotEl}
                className={`custom-cursor ${isHovering ? 'hover' : ''}`}
                style={{ transform: 'translate(-50%, -50%)' }}
            />
            <div
                ref={ringEl}
                className={`custom-cursor-follower ${isHovering ? 'hover' : ''}`}
                style={{ transform: 'translate(-50%, -50%)' }}
            />
        </>
    );
};

export default CustomCursor;
