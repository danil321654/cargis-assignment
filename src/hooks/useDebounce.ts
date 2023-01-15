import { useCallback, useRef } from "react";

export const useDebouncedCallback = <T extends (...args: any) => any>(
  callback: T,
  delay: number
) => {
  const timeout = useRef<NodeJS.Timeout>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current != null) {
        clearTimeout(timeout.current);
      }
      timeout.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
};
