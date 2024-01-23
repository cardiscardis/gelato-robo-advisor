// Filename - App.js

import React, { useEffect, useState } from "react";
import {
	BarChart,
	Bar,
	CartesianGrid,
	XAxis,
	YAxis,
  ResponsiveContainer
} from "recharts";

const Barchart = ({data}:{data: any}) => {
  console.log('Barchart', data)
  const [ newData, setNewData ] = useState<any>([])

  const remove = (data: any) => {
    const keyArray = [
      {name: '_id'},
      {name: 'Risk_Factor'}
    ]
    let newData = data.filter((i: any) => !keyArray.some((j: any) => j.name === i.name));
    return newData
  }
	
  useEffect(() => {
    if (Object.keys(data).length) {
      console.log(data)
      const d = Object.entries(data).map(([key, val]:any) => ({name: key, value: Number(val.replace('%', ''))}))
      let da = remove(d)
      console.log('Barchart2', da)
      setNewData(da)
    }
  }, [data])

  console.log(newData.length)
  
	return (
    <ResponsiveContainer width='100%' height={600}>
      <BarChart data={newData.length && newData}>
        <Bar dataKey="value" fill="purple" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
	);
};

export default Barchart;
