//conección del fron end y atlas mongodb
import Link from "next/link";
import React from "react";
import BtnDelete from "./BtnDelete";
const getData = async () => {
  try {
    const response = await fetch(process.env.URI, { cache: "no-store" });
    return response.json();
  } catch (error) {
    console.log("Error: ", error);
  }
};

//impresion de la data en la consola
// const {data} = await getData()
// console.log(data)

const Show = async () => {
  const { data } = await getData();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((element) => (
        <div className="p-3 shadow-lg shadow-indigo-500/50 my-4 flex justify-between">
          <div>
            {/* <p>{element._id}</p> */}
            <h2 className="font-bold text-2xl text-slate-700">
              {element.name}
            </h2>
            <p>{element.age}</p>
          </div>
          <div className="flex mt-4 space-x-3 md:mt-6">
            {/* btn update comentado */}
            {/* <Link 
            href={`/edit/${element._id}`} 
            className=" inline-flex  items-center px-4 py-2 text-sm   font-medium text-center text-white bg-violet-400 hover:bg-violet-600 focus:ring-4 focus:outline-none rounded-lg"
            >Update</Link> */}
            {/* btn delete comentado */}
            {/* <BtnDelete id={element._id} /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Show;
