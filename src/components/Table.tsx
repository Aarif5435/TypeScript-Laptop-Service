import { useEffect, useState } from "react";
import axios from "axios";
import { Form } from "./Form";

type InputType = {
  Model: string;
  Make_year: number;
  Operating_System: string;
  Screen_Height: string;
  Screen_Width: string;
  price: number;
  id: number;
  
};

export const TableData = () => {
  const [laptop, setLaptop] = useState<InputType[]>([]);
  const [val , setVal] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:8080/laptop")
      .then(({ data }: { data: InputType[] }) => {
        // console.log(data)
        setLaptop(data);
      });
  };

  const selection = (event: React.ChangeEvent<HTMLSelectElement>)=> {
    console.log(event.target.value);
    setVal(event.target.value)
  }

  function sort<T>(arr: T[], by: keyof T ) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j][by] > arr[j + 1][by]) {
          swap(arr, j, j + 1);
        }
      }
    }
    console.log(arr);
    // setLaptop()
    return arr;
  }
  function swap<T>(arr: T[], i: number, j: number) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // sort(laptop,"Make_year");
 function fun(){
   console.log("yes")
    
  //  console.log(laptop)
    var sar = sort(laptop,val );
    
   setLaptop([...sar]);
 }

  return (
    <div>
      <Form />
      <select onChange={selection} name="laptop" id="laptop">
        <option value="id">ID</option>
        <option value="Model">Model</option>
        <option value="Make_year">Make year</option>
        <option value="Operating_System">Operating System</option>
        <option value="Screen_Height">Screen Height</option>
        <option value="Screen_Width">Screen Width</option>
        <option value="Price">Price</option>
      </select> <button onClick={fun}>sort</button>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Model</th>
            <th>Make year</th>
            <th>Operating System</th>
            <th>Screen Height</th>
            <th>Screen Width</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {laptop.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.Model}</td>
              <td>{e.Make_year}</td>
              <td>{e.Operating_System}</td>
              <td>{e.Screen_Height}</td>
              <td>{e.Screen_Width}</td>
              <td>{e.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
