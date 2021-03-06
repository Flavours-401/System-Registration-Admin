import React,{useState , useEffect } from "react";
import axios from "axios";
// components

import CardManageStudents from "components/Cards/CardManageStudents";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  // const [staff, setstaff] = useState([]);
  const baseUrl = 'http://127.0.0.1:8000/';
  const student_url = baseUrl + 'student_list2/';

  const [student, setstudent] = useState([]);
  // const [course, setcourse] = useState([]);
  useEffect(() => {
      const tokenLocal = localStorage.getItem("token")

      const localTwo = JSON.parse(tokenLocal)
     
      console.log("LS token: ",localTwo.token.access);
      const data = async()=>{
        const config = {
          headers: { "Authorization": `Bearer ${localTwo.token.access}` }
        }
      // axios.get(staff_url, config).then(res => {
      //     setstaff(res.data)
      //     console.log(res.data);
      // });
      // }

      axios.get(student_url, config).then(res => {
          setstudent(res.data)
          console.log(res.data);
      });}
      // axios.get(course_url, config).then(res => {
      //     setcourse(res.data)
      //     console.log(res.data);
      // });
      data()
  }, [])
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full px-4 mb-12">
          <CardManageStudents
          
          student={student}/>
        </div>
        {/* <div className="w-full px-4 mb-12">
          <CardTable color="dark" />
        </div> */}
      </div>
    </>
  );
}

Tables.layout = Admin;
