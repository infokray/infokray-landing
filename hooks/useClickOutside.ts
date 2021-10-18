import { useEffect, useRef } from "react";

const useClickOutside = (handler: () => void) => {
  let domNode = useRef<any>();

  useEffect(() => {
    let maybeHandler = (event: any) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default useClickOutside;
