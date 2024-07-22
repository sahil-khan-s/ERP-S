"use client";
import React, { PureComponent, CSSProperties } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 700 },
  { name: 'Group B', value: 300 },
];
const COLORS = ['#DDFF8F', '#000'];

<<<<<<< HEAD
interface Props {
  count: number;

=======
interface ExampleProps {
  count: number;
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
}

interface ExampleState {
  activeIndex: number | null;
}

<<<<<<< HEAD
export default class VendorPageChart extends PureComponent<Props, ExampleState> {
  constructor(props: Props) {
=======
export default class VendorPageChart extends PureComponent<ExampleProps, ExampleState> {
  constructor(props: ExampleProps) {
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

<<<<<<< HEAD

  render() {
    const { activeIndex } = this.state;
=======
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
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095

    const cellStyle = (index: number): CSSProperties => ({
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
      boxShadow: activeIndex === index ? '80px 80px 80px rgba(0, 0, 0, 1)' : 'none',
    });

<<<<<<< HEAD

=======
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
    return (
      <div style={{ position: 'relative', width: '300px', height: '297px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
<<<<<<< HEAD
              innerRadius={75}
=======
              innerRadius={80}
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
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
<<<<<<< HEAD
=======
                  // onMouseEnter={() => this.onPieEnter({}, index)}
                  // onMouseLeave={this.onPieLeave}
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
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
<<<<<<< HEAD
          <span className='font-bold m-0 p-0'>{this.props.count}</span>
=======
          <span className='font-bold m-0 p-0'>{total}</span>
>>>>>>> f329f86043d006aca95a17d54af2f7bd41bd5095
          <span className='text-[12px] m-0 p-0 text-black'>Total Cont.</span>
        </div>
      </div>
    );
  }
}
