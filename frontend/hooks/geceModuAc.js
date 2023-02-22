import { useState } from "react";
import {useLocalStorage} from "./localStorageKullan";

export const useGeceModuAc = initialValue => {
    const [value, setValue] = useState(initialValue);
    const toggle = e => {
        e.preventDefault();
        setValue(!value);
      };
    return [value, toggle];
  };