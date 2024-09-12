import React, { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    const fetchEstates = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_MAIN_URL}/real-estates`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_BEARER_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEstates();
  }, []);

  return <div></div>;
}

export default App;
