import "./datatable.css";


import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, inputAdornmentClasses } from "@mui/material";
import { Link } from 'react-router-dom';


const Datatable = () => {

  const [customers, setCustomer] = useState([])
  const [search, setSearch] = useState("")
  const [filteredResults, setFilteredResults] = useState([]);


  const getCustomers = async () => {
    try {
      const response = await axios.get('https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/clients/', {
        headers: {
          'fineract-platform-tenantid': 'default',
          'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
        }

      })
      
      setCustomer(response.data.pageItems)

      setFilteredResults(response.data.pageItems)
    } catch (error) {
      console.log(error)
    }
  }

  const columns = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
      cell: row => {
        return (
          <Link to={"/customer/" + row.id}  >
            <div className="person">{row.displayName}</div>
          </Link>
        )
      }

    },
    {
      name: 'ID No',
      selector: (row) => row.externalId

    },
    {
      name: 'Phone Number',
      selector: (row) => row.mobileNo

    },
    {
      name: 'Account Number',
      selector: (row) => customers.accountNo

    },
    {
      name: 'Loan Type',
      selector: (row) => row.loantype


    },
    {
      name: 'Device',
      selector: (row) => row.device


    },
    {
      name: 'Bracket',
      selector: (row) => row.bracket

    }
  ]

  useEffect(() => {
    getCustomers();
  }, [])


  useEffect(() => {
    const result = customers.filter(customer => {
      return customer.name.toLowerCase().match(search.toLocaleLowerCase());
    })
    setFilteredResults(result)
  }, [search])




  const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height

      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',

      },
    },
  };

  return (

    <div className="sidebar">
      <DataTable
        columns={columns}
        data={filteredResults}
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        pagination
        subHeaderComponent={
          <input
            type="text"
            placeholder="Search Name,ID No,Phone No,Account No"
            onChange={(e) => setSearch(e.target.value)}
            className="inputbar"
          />
        }

        subHeaderAlign="left"

        customStyles={customStyles}
      />



    </div>
  )


}

export default Datatable
