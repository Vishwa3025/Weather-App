// import React, { useState } from "react";

// function SearchWeather() {
//   const apiKey = "f19856fbe2aa9e1939c69f2d8bd2422e";
//   const [weatherData, setweatherData] = useState([{}]);
//   const [city, setCity] = useState("");

//   const getWeather = (event) => {
//     if (event.key == "Enter") {
//       fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setweatherData(data);
//           console.log(data);
//         });
//     }
//   };

//   let emoji = null;
//   // if (typeof data === "undefined") {
// if (data.weather[0].main == "Clouds") {
//   emoji = "fa-cloud";
// } else if (data.weather[0].main == "ThunderStrom") {
//   emoji = "fa-bolt";
// } else if (data.weather[0].main == "Drizzle") {
//   emoji = "fa-cloud-rain";
// } else if (data.weather[0].main == "Rain") {
//   emoji = "fa-cloud-shower-heavy";
// } else if (data.weather[0].main == "Snow") {
//   emoji = "fa-snow-flake";
// } else {
//   emoji = "fa-smog";
// }
//   // } else {
//   //   return <div>...Loading</div>;
//   // }

// //Date
// let d = new Date();
// let date = d.getDate();
// let year = d.getFullYear();
// let month = d.toLocaleDateString("default", { month: "long" });
// let day = d.toLocaleDateString("default", { weekday: "long" });

// //Time
// let time = d.toLocaleString([], {
//   hour: "2-digit",
//   minute: "2-digit",
//   second: "2-digit",
// });

//   //Temperature
//   let temp = (data.main.temp - 273.15).toFixed(2);
//   let temp_min = (data.main.temp_min - 273.15).toFixed(2);
//   let temp_max = (data.main.temp_max - 273.15).toFixed(2);

//   return (
// <div className="bg-slate-500">
//   <div className="flex justify-center items-center h-screen w-full border">
//     <div className="w-1/2 border h-[700px] relative overflow-hidden flex justify-center items-center">
//       <img
//         src={`https://source.unsplash.com/600x900/?${data.weather[0].main}`}
//         alt="Avatar"
//         className="w-full h-full"
//       />
//       <div className="absolute inset-y-8">
//         <input
//           type="search"
//           id="search"
//           className="p-2 w-[300px] text-gray-900 bg-blue-500 rounded-lg form-control"
//           placeholder="Search City..."
//           name="search"
//           onChange={(e) => setCity(e.target.value)}
//           value={city}
//           onKeyPress={getWeather}
//           required
//         />
//       </div>

// <div className="absolute w-2/3 inset-y-24 opacity-60 bg-black text-white text-xl text-center">
//   <p className="p-5 text-5xl font-semibold">
//     {data.name}, {data.sys.country}
//   </p>
//   <p className="text-2xl p-2 font-medium">
//     {day}, {month} {date}, {year}
//     {/* <br />
//     {time} */}
//   </p>
//   <p className="p-2 text-lg">Last updated 3 min ago.</p>
//   <i className={`fas ${emoji} fa-4x`}></i>
//   <p className="text-4xl font-bold">{temp}&deg;C</p>
//   <p className="pt-10 font-semibold text-3xl">
//     {data.weather[0].main}
//   </p>
//   <p className="text-2xl font-light p-2">
//     {temp_min} &deg;C | {temp_max} &deg;C
//   </p>
//   <p></p>
// </div>
//     </div>
//   </div>
// </div>
//   );
// }

// export default SearchWeather;
