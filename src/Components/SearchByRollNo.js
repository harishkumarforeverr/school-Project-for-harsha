import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

import { useSelector } from "react-redux";
import { Table, Tag, Space } from "antd";
import { Input, Tooltip, Button } from "antd";

const { Search } = Input;
const SearchByRollNo = () => {
  const [searchSyudent, setSearchStudent] = useState(undefined);
  const formdata = useSelector((store) => store.formdata);
  const onSearch = (e) => {
    const Rollno = parseFloat(e);
    console.log(Rollno);
    const newData = formdata.filter((student) => parseFloat(student.RollNo) === Rollno);
    console.log(newData);
    setSearchStudent(newData);
  };

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

  return (
    <div className="SearchByRollNo">
      <div className="SearchByRollNo__search">
        <Search
          placeholder="input search text"
          onSearch={onSearch}
          enterButton
        />
      </div>
      <Table columns={columns} dataSource={searchSyudent} />
    </div>
  );
};
export default SearchByRollNo;
