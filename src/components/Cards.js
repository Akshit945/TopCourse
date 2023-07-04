import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category; // all,Business,Design,Development,Lifestyle
  //console.log(courses);

  //creating array for liked courses
  const [likedCourses, setLikedCourses] = useState([]);

  //returns you a list of all courses recieved from api response
  function getCourses() {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
          // console.log(allCourses);
        });
      });
      return allCourses;
    } else {
      //main sirf specific categiry ka data array krunga
      //ise category ki value which in an array return hoga
      //whenever category changes Ui re-render AS useState is used
      return courses[category];
    }
  }
  //console.log(courses["Development"]);
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;
