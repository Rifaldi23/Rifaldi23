import { useState } from "react"
import { Input } from "antd";

export default function Auto() {
  const [lainnya, setLainnya] = useState([]);

  function handleLainnya(index, value) {
    let lain = JSON.parse(JSON.stringify(lainnya));
    if (value) {
      lain[index] = value;
    } else {
      lain.splice(index, 1);
    }
    setLainnya(lain);
  }

  return (
    <div>
      <Input
        placeholder="Lainnya"
        value={lainnya[0] || ""}
        onChange={(e) => handleLainnya(0, e.currentTarget.value)}
      />
      {lainnya[0] ? (
        <>
          {lainnya.map((_, index) => (
            <Input
              key={index}
              placeholder={"Lainnya" + (index + 1)}
              value={lainnya[index + 1] || ""}
              onChange={(e) =>
                handleLainnya(index + 1, e.currentTarget.value)
              }
            />
          ))}
        </>
      ) : null}
    </div>
  )
}
