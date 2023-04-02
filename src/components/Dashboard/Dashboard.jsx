import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {

    const students = [
        {
            id: 1,
            name: "John",
            phy: 80,
            chem: 90,
            math: 75
        },
        {
            id: 2,
            name: "Alice",
            phy: 70,
            chem: 85,
            math: 95
        },
        {
            id: 3,
            name: "Bob",
            phy: 90,
            chem: 80,
            math: 70
        },
        {
            id: 4,
            name: "Jane",
            phy: 60,
            chem: 70,
            math: 80
        },
        {
            id: 5,
            name: "Michael",
            phy: 75,
            chem: 90,
            math: 85
        },
        {
            id: 6,
            name: "Sara",
            phy: 85,
            chem: 75,
            math: 60
        },
        {
            id: 7,
            name: "David",
            phy: 95,
            chem: 85,
            math: 75
        },
        {
            id: 8,
            name: "Emily",
            phy: 70,
            chem: 80,
            math: 65
        },
        {
            id: 9,
            name: "Tom",
            phy: 80,
            chem: 90,
            math: 80
        },
        {
            id: 10,
            name: "Amy",
            phy: 75,
            chem: 70,
            math: 90
        },
        {
            id: 11,
            name: "Peter",
            phy: 85,
            chem: 90,
            math: 70
        },
        {
            id: 12,
            name: "Lucy",
            phy: 90,
            chem: 75,
            math: 80
        }
    ];

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={students}
            >
                <Line dataKey={'phy'}></Line>
                <Line dataKey={'chem'} stroke="#82ca9d"></Line>
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;