

import React, { useEffect, useState } from "react";

const Timer = () => {
  const [toast, setToast] = useState(false);

  useEffect(() => {
    if (toast) {
        const timer = setTimeout(() => {
            setToast(false);
        }, 3000);

        return ()=>{
            clearTimeout(timer)
        }
      
    }
  }, [toast]);

  return (
    <div>
      <button onClick={() => setToast(true)}>Click me!</button>
      {toast && <h1>Toast Notification</h1>}
    </div>
  );
};

export default Timer;
