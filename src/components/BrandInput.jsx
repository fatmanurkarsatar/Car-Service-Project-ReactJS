import React, { useState } from "react";
import CommonButtons from "./CommonButtons";

function BrandInput({ addCarToList}) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const SubmitClick = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      addCarToList(input); // carList'i güncellemek için üst fonksiyonu çağır
      setInput("");
    }
  };

  
  function InputTest({ input }) {
    let newArr = [];
    const newInput = input.trim();
    const words = newInput.split(" "); 

    if (words.length >= 2) {
      const combined = words.join("").toLowerCase(); // Kelimeleri boşluk olmadan birleştir
      const capitalized = combined.charAt(0).toUpperCase() + combined.slice(1); // İlk harfi büyük yap
      newArr.push(capitalized);

      // console.log(words.length); //kelime sayısını öğrenme
      console.log("Birleştirilmiş kelime:", capitalized);
      // console.log("Yeni dizi:", newArr);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-start">
        <input
          type="text"
          id="brand-input"
          placeholder="Bir araç markası girin"
          value={input}
          onChange={handleChange}
        />
        <CommonButtons text="submit" variant="danger" onClick={SubmitClick} />
        <InputTest input={input} />
      </div>
      
    </>
  );
}

export default BrandInput;
