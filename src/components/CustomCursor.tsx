import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const requestRef = useRef<number>();

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        // Continuous animation loop for smooth trailing
        const animate = () => {
            setFollowerPosition(prev => ({
                x: prev.x + (position.x - prev.x) * 0.2,
                y: prev.y + (position.y - prev.y) * 0.2
            }));
            requestRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseover', handleMouseOver);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [position.x, position.y]);

    return (
        <>
            {/* Main Cursor Dot */}
            <div
                className={`custom-cursor ${isHovering ? 'hover' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
            {/* Follower Ring - trails behind */}
            <div
                className={`custom-cursor-follower ${isHovering ? 'hover' : ''}`}
                style={{
                    left: `${followerPosition.x}px`,
                    top: `${followerPosition.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
        </>
    );
};

export default CustomCursor;
