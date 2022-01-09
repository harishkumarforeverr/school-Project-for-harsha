import React from "react";

import { Table, Tag, Space } from "antd";
import { useSelector } from 'react-redux'
const ViewStudentRecord = () => {
  const columns = [
    {
      title: "Roll No",
      dataIndex: "RollNo",
      key: "RollNo",
    },
    {
      title: "Student Name",
      dataIndex: "StudentName",
      key: "StudentName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Father Name",
      dataIndex: "FatherName",
      key: "FatherName",
    },
    {
      title: "Email",
      dataIndex: "Email",
      key: "Email",
    }, 
    {
      title: "Maths subject",
      dataIndex: "Maths",
      key: "Maths",
    }, 
    {
      title: "Physics subject",
      dataIndex: "Physics",
      key: "Physics",
    }, 
    {
      title: "Computers  subject",
      dataIndex: "Computers",
      key: "Computers",
    }, 
    {
      title: "Total Marks ",
      dataIndex: "TotalMarks",
      key: "TotalMarks ",
    }, 
    {
      title: "Average Marks",
      dataIndex: "avgMarks",
      key: "avgMarks",
    }, 
  ];
 const formdata=useSelector((store)=>store.formdata);
  return (
    <div>
      <Table columns={columns} dataSource={formdata} />
    </div>
  );
};
export default ViewStudentRecord;
