import React from 'react';

const Table = ({ columns, data }) => {
  return (
    <section className="w-full flex items-center bg-gray-50 font-poppins">
      <div className="justify-center  flex-1 px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="pt-4 bg-white rounded shadow">
          {/* <div className="flex px-6 pb-4 border-b">
            <h2 className="text-xl font-bold">Table</h2>
          </div> */}
          <div className="p-4 overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-lg text-left text-gray-500">
                  {columns.map((column, index) => (
                    <th key={index} className="px-4 py-2 font-semibold">{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "text-md bg-gray-100" : "text-md"}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-4 py-3">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;








import React from 'react'
import { Link } from 'react-router-dom'
import Table from '../../../components/Table'

const CBC = () => {
    const columns = ["Test ID", "Name"];
    const data = [
        ['018276td45', 'Samiul Fahad'],
        ['018276td45', 'Ratul'],
        ['018276td45', 'Sharukh'],
        ['018276td45', 'Mithun']
    ];
  return (
    <section>
        <div className='flex flex-col justify-between items-center w-full md:w-4/5 mx-auto mt-10 gap-4'>
            <div className='text-xl font-bold mx-auto text-center'>CBC Test Reports</div>
            <Link className='btn'>New CBC Report</Link>
            <div className='w-full md:w-4/5'>
                <Table columns={columns} data={data} />
            </div>
        </div>
    </section>
  )
}

export default CBC





