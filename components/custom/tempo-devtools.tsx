'use client';

import { TempoDevtools } from "tempo-devtools";
import { useEffect } from "react";

export default function Tempo() {
    useEffect(() => {
        if (process.env.NEXT_PUBLIC_TEMPO) {
            TempoDevtools.init();
        }
    }, []);

    return null;
}
