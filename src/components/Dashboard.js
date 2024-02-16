import React, { useEffect, useState } from "react";
import Lists from "./Lists";

const Dashboard = () => {
  const [admiLlist, setAdminList] = useState([]);
  const [memberList, setMemberList] = useState([]);
  const [dataList, setDataList] = useState([])
  let [count, setCount] = useState()

  useEffect(() => {
    const admin = [];
    const member = [];
    fetch("https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098")
      .then((res) => res.json())
      .then((res) => {
        setDataList(res)
        res.map((item) => {
          if (item.role === "admin") {
            admin.push(item);
          } else {
            member.push(item);
          }
          setAdminList(admin);
          setMemberList(member);
          return null;
        });
      });
  }, [count]);

  function handleChange(e) {
    const input = e.target.value;
    if (input === '') {
        console.log(input.length)
        setCount(false)
    } else {
      const data1 = admiLlist.filter((item) => {
        const item1 = item.first_name + " " + item.last_name;
        if (item1.slice(0, input.length) === input) {
          return item;
        }
      });
      setAdminList(data1);
      const data2 = memberList.filter((item) => {
        const item1 = item.first_name + " " + item.last_name;
        if (item1.slice(0, input.length) === input) {
          return item;
        }
      });
      setMemberList(data2);
    }
    console.log(input);
  }

  return (
    <>
      <div className="text-white bg-indigo-400 py-4 ps-14 text-2xl font-bold flex justify-between">
        <div>Team </div>
        <input
          onChange={(e) => handleChange(e)}
          className="bg-white text-gray-700 text-sm rounded-xl p-1 w-80 ps-3 me-5 placeholder:text-slate-400"
          placeholder="Search"
        />
      </div>
      {/* -------------body page------------ */}
      <div>
        {admiLlist.length > 0 && (
          <Lists list={admiLlist} name="Adminastrators" />
        )}
        <div className="border-b-2 border-solid mt-5 mx-14" />
        {memberList.length > 0 && <Lists list={memberList} name="Members" />}
      </div>
    </>
  );
};

export default Dashboard;
