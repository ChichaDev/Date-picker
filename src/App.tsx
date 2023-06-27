import { useState } from "react";
import { DatePicker } from "./DatePicker";

import "./App.css";

const MIN_DATE = new Date(2022, 6, 1);
const MAX_DATE = new Date(2023, 9, 0);

function App() {
  const [date, setDate] = useState(() => new Date());

  return (
    <>
      <DatePicker
        value={date}
        onChange={setDate}
        min={MIN_DATE}
        max={MAX_DATE}
      />
    </>
  );
}

export default App;
