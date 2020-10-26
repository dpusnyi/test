import { useEffect } from "react";

export const useOutsideClickHandler = (
  ref: React.MutableRefObject<null | Element>,
  action: (toggle: boolean) => void
  ): void => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        action(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, action]);
}