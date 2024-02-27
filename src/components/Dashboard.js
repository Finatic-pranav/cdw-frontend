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
      setCount(true)
  }, [count]);

  function division() {
    const admin = [];
    const member = [];
    dataList.map((item) => {
      if (item.role === "admin") {
        admin.push(item);
      } else {
        member.push(item);
      }
      setAdminList(admin);
      setMemberList(member);
      return null;
    });
  }

  function handleChange(e) {
    const input = e.target.value.toLowerCase();
    division()
    if (input === '') {
        setCount(false)
    } else {
      setAdminList(prev => prev.filter((item) => {
        const item1 = item.first_name.toLowerCase() + " " + item.last_name.toLowerCase();
        if (item1.slice(0, input.length) === input) {
          return item;
        }
      }));
      setMemberList(prev => prev.filter((item) => {
        const item1 = item.first_name.toLowerCase() + " " + item.last_name.toLowerCase();
        if (item1.slice(0, input.length) === input) {
          return item;
        }
      }));
    }
  }
  console.log("input");


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
