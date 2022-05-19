import { useState } from "react";
import axios from "axios";


export const Form = () => {
  const [formData, setFormData] = useState([]);

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
      
    axios.post("http://localhost:8080/laptop", formData);
  };
//   const handleEvent = (event :React.FormEvent<HTMLFormElement>)=>{
//     event.preventDefault();
//   }
  return (
    <div>
      <form >
        <input onChange={handle} type="text" placeholder="Model" name="Model" />
        <br />
        <input
          onChange={handle}
          type="text"
          placeholder="Make year"
          name="Make_year"
        />{" "}
        <br />
        <input
          onChange={handle}
          type="text"
          placeholder="Operating System"
          name="Operating_System"
        />{" "}
        <br />
        <input
          onChange={handle}
          type="text"
          placeholder="Screen Height"
          name="Screen_Height"
        />{" "}
        <br />
        <input
          onChange={handle}
          type="text"
          placeholder="Screen Width"
          name="Screen_Width"
        />{" "}
        <br />
        <input
          onChange={handle}
          type="text"
          placeholder="Price"
          name="Price"
        />{" "}
        <br />
        <input onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
};
