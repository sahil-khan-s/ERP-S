"use client";
import React, { PureComponent, CSSProperties } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 700 },
  { name: 'Group B', value: 300 },
];
const COLORS = ['#DDFF8F', '#000'];

interface ExampleProps {
  count: number;
}

interface ExampleState {
  activeIndex: number | null;
}

export default class VendorPageChart extends PureComponent<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  // onPieEnter = (_: any, index: number) => {
  //   this.setState({
  //     activeIndex: index,
  //   });
  // };

  // onPieLeave = () => {
  //   this.setState({
  //     activeIndex: null,
  //   });
  // };

  render() {
    const { activeIndex } = this.state;
    const total = 121;

    const cellStyle = (index: number): CSSProperties => ({
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
      boxShadow: activeIndex === index ? '80px 80px 80px rgba(0, 0, 0, 1)' : 'none',
    });

    return (
      <div style={{ position: 'relative', width: '300px', height: '297px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
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
                  // onMouseEnter={() => this.onPieEnter({}, index)}
                  // onMouseLeave={this.onPieLeave}
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
          <span className='font-bold m-0 p-0'>{total}</span>
          <span className='text-[12px] m-0 p-0 text-black'>Total Cont.</span>
        </div>
      </div>
    );
  }
}
