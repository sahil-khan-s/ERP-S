"use client";
import React, { PureComponent, CSSProperties } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group B', value: 300 },
];
const COLORS = ['#DDFF8F', '#000002', "#A9E338"];

interface Props {
  count: number;

}

interface ExampleState {
  activeIndex: number | null;
}

export default class VendorPageChart extends PureComponent<Props, ExampleState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }


  render() {
    const { activeIndex } = this.state;

    const cellStyle = (index: number): CSSProperties => ({
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
      boxShadow: activeIndex === index ? '80px 80px 80px rgba(0, 0, 0, 1)' : 'none',
    });


    return (
      <div style={{ position: 'relative', width: '250px', height: '280px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={100}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                  style={cellStyle(index)}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div
          className='flex flex-col items-center'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <span className='font-bold m-0 p-0'>{this.props.count}</span>
          <span className='text-[12px] m-0 p-0 text-black'>Total Cont.</span>
        </div>
      </div>
    );
  }
}
