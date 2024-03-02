import { CardFooter, Button, IconButton, Typography } from "@material-tailwind/react"

import TableRow from "./TableRow"

const TABLE_HEAD = ["Invoice ID", "Name", "Contact", "Delivery"]

const TABLE_ROWS = [
  {
    id: 123,
    name: "John Michael",
    contact: 1475554,
    delivered: false,
  },
  {
    id: 124,
    name: "John Mike",
    contact: 1475554,
    delivered: false,
  },
  {
    id: 125,
    name: "John",
    contact: 1475554,
    delivered: true,
  },
  {
    id: 127,
    name: "Michael",
    contact: 1475554,
    delivered: true,
  },
  {
    id: 128,
    name: "John Michael",
    contact: 1475554,
    delivered: false,
  },
]

const Table = () => {
  return (
    <section className="min-w-max">
      <table className="w-full mx-auto bg-indigo-50 min-w-max table-auto text-left md:w-2/3 md:mt-20">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-500 text-white bg-indigo-500 p-4">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ id, name, contact, delivered }, index) => {
            const isLast = index === TABLE_ROWS.length - 1
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-500"

            return <TableRow id={id} name={name} contact={contact} delivered={delivered} classes={classes} />
          })}
        </tbody>
      </table>
     
    </section>
  )
}

export default Table








import { Switch } from "@mui/material"
import React, { useState } from "react"

const TableRow = ({ id, name, contact, delivered, classes }) => {
  const [isDelivered, setIsDelivered] = useState(delivered)
  const deliveryH = e => {
    setIsDelivered(old => !old)
  }
  return (
    <tr key={id}>
      <td className={classes}>{id}</td>
      <td className={classes}>{name}</td>
      <td className={classes}>{contact}</td>
      <td className={classes}>
        No
        <Switch checked={isDelivered} onChange={deliveryH} />
        Yes
      </td>
    </tr>
  )
}

export default TableRow

