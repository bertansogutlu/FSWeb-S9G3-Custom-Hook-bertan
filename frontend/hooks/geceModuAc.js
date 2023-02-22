import { useState } from "react";

export const useMod = initialValue => {
    const [value, setValue] = useState(initialValue);
    const toggle = e => {
        e.preventDefault();
        setValue(!value);
      };
    return [value, toggle];
  };