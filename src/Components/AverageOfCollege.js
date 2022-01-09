import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Result, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
const AverageOfCollege = () => {
  const formdata = useSelector((store) => store.formdata);
  // const [avgmarks, setAvg] = useState(false);

  let avgmarks = formdata.reduce((acc, next) => {
    return acc + parseFloat(next.avgMarks);
  }, 0);
  console.log(avgmarks);
  avgmarks = parseFloat(avgmarks) / parseFloat(formdata.length);
  console.log(avgmarks);
 

  return (
    <div>
      {avgmarks ? (
        <Result
          icon={<SmileOutlined />}
          title="Great, we have done all the operations!"
          extra={<h1> OverAllSchool Average : {avgmarks}</h1>}
        />
      ) : (
        <h1> Please Register A Sudent firstly</h1>
      )}
    </div>
  );
};
export default AverageOfCollege;
