import React from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";

// Data la rhe hai
import { apiUrl, filterData } from "./data";
//Alternate
//import apiUrl from "./data";
//import filterData from "./data";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {
  //at starting courses ==null
  //const [courses, setCourses] = useState(null);
  const [courses, setCourses] = useState([]); //this will run without spinner
  //set loading is true at start
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title); //it is initialized with 'All'
  //const [error, setError] = useState(false);

  //fetchData function saare ke saare courses ka data nikalehga
  async function fetchData() {
    //setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output ->
      setCourses(output.data);
      console.log(output.data);
      //courses=output.data=>we need data key
      setLoading(false);
    } catch (error) {
      toast.error("There is some problem in network");
      //  setError(true);
    }
  }

  //run at first render AND we are fetching api data
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div
          className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
        >
          {}
          {/* if loading is true show spinner */}
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
