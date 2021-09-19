import React, { useEffect, useRef, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const inputTextRef = useRef();
  useEffect(() => {
    if (inputTextRef.current != null) {
      inputTextRef.current.focus();
    }
  }, []);
  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setData((d) => [...d, { text }]);
            setText("");
          }}
        >
          <input
            ref={inputTextRef}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <div>
        <p>{data.length}</p>
        <ul>
          {data && data.map((item, index) => <li key={index}>{item.text}</li>)}
        </ul>
      </div>
    </div>
  );
}
