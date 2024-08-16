import './App.css';
import {ResponsiveContainer,Line,LineChart,XAxis,YAxis,CartesianGrid,Legend,Tooltip,AreaChart,Area,BarChart,Bar,PieChart,Pie} from 'recharts'

const pdata = [
  {
    name: 'Python',
    student: 13,
    fees: 10
  },
  {
    name: 'Javascript',
    student: 15,
    fees: 12
  },
  {
    name: 'PHP',
    student: 5,
    fees: 10
  },
  {
    name: 'Java',
    student: 10,
    fees: 5
  },
  {
    name: 'C#',
    student: 9,
    fees: 4
  },
  {
    name: 'C++',
    student: 10,
    fees: 8
  },
];


function App() {
  return (
    <>
    <h1 className='chart_heading'> Line Chart</h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <LineChart data={pdata} width={500} height={300} margin={{top:120,right:300,left:200, bottom:5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=>value+ " Programming"} />
        <YAxis />
        <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
        <Legend/>
        <Line type="monotone" dataKey="student" stroke='red' activeDot={{r:8}}/>
        <Line type="monotone" dataKey="fees" stroke='green' activeDot={{r:8}}/>

        


      </LineChart>

    </ResponsiveContainer>
    

    <h1 className="chart_heading">Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={400}
          height={300}
          data={pdata}
          margin={{
            top: 150,
            right: 300,
            left: 200,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="student" fill="#8884d8" />
          <Bar dataKey="fees" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>

    <h1 className='chart_heading'> AreaChart </h1>
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart data={pdata} width={500} height={300} margin={{top:200,right:300,left:200, bottom:10}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value)=>value+ " Programming"} />
        <YAxis />
        <Tooltip contentStyle={{backgroundColor:'yellow'}}/>
        <Legend/>
        <Area type="monotone" dataKey="student" stroke='red' activeDot={{r:8}}/>
        <Area type="monotone" dataKey="fees" stroke='green' activeDot={{r:8}}/>

        


      </AreaChart>

    </ResponsiveContainer>


    <h1 className="chart_heading">Pie Chart - Students</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart>
          <Pie data={pdata} dataKey="student" nameKey="name" fill="#8884d8" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      <h1 className="chart_heading">Pie Chart - Fees</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <PieChart>
          <Pie data={pdata} dataKey="fees" nameKey="name" fill="#82ca9d" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </>

  );
}

export default App;
