import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (!hash) return;

        // kis delay, hogy a DOM biztosan készen legyen
        const timeout = setTimeout(() => {
            const id = hash.replace("#", "");
            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }, 50);

        return () => clearTimeout(timeout);
    }, [hash]);

    return null;
}
