import React, { useEffect, useRef } from 'react';

const CHAR_SET = 'ｱｶｻﾀﾅﾊﾏﾔﾗﾜ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZｶﾀｶﾅ';

export default function MatrixBackground({ enabled }) {
    const canvasRef = useRef(null);
    const dropsRef = useRef([]);
    const devicePixelRatioRef = useRef(1);
    const ctxRef = useRef(null);
    const fontSizeRef = useRef(14);

    // Initialize canvas and handle resize
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        ctxRef.current = ctx;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        devicePixelRatioRef.current = dpr;

        const resize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);

            const fontSize = Math.max(12, Math.min(18, Math.floor(14 * dpr)));
            fontSizeRef.current = fontSize;
            ctx.font = `${fontSize}px monospace`;
            ctx.textBaseline = 'top';

            const columnCount = Math.max(1, Math.floor(canvas.width / fontSize));
            dropsRef.current = Array.from(
                { length: columnCount },
                () => Math.floor(Math.random() * (canvas.height / fontSize))
            );

            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        resize();
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    // Animation loop
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!canvas || !ctx) return;

        let frameId = null;

        const drawFrame = () => {
            const fadeOpacity = 0.08;
            ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const drops = dropsRef.current;
            const fontSize = fontSizeRef.current;

            for (let i = 0; i < drops.length; i++) {
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                const char = CHAR_SET[Math.floor(Math.random() * CHAR_SET.length)];

                const isBrightHead = Math.random() < 0.05;
                ctx.fillStyle = isBrightHead
                    ? 'rgba(200, 255, 200, 0.6)'
                    : 'rgba(0, 255, 140, 0.25)';
                ctx.fillText(char, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i] += 1;
            }

            frameId = requestAnimationFrame(drawFrame);
        };

        if (enabled) {
            ctx.fillStyle = 'rgba(0, 0, 0, 1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            frameId = requestAnimationFrame(drawFrame);
        }

        return () => {
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [enabled]);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
            style={{ background: 'black' }}
        />
    );
}


