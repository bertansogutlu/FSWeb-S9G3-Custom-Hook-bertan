export const useMod = initialValue => {
    const [geceModu, setGeceModu] = useState(initialValue);
    const toggleMode = e => {
        e.preventDefault();
        setGeceModu(!geceModu);
      };
    return [geceModu, setGeceModu, toggleMode];
  };