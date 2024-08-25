import { useEffect, useRef } from "react";

export const usePreviousHook = (value) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    });
    
    return ref.current;
}
