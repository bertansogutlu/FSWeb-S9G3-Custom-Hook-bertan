import { useState } from "react";
import {useLocalStorage} from "./localStorageKullan";

export const useGeceModuAc = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    const toggle = e => {
        e.preventDefault();
        setValue(!value);
      };
    return [value, toggle];
  };