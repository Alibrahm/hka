import React from 'react'
import "./payments.css";
import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from 'react-router-dom';
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import Widget from '../../components/widget/Widget'
import Spinner from 'react-bootstrap/Spinner'
import * as ReactBootStrap from 'react-bootstrap'
import moment from "moment";




const PaymentHistory = () => {
  
    const [customers, setCustomer] = useState([])
    const [data, setTransactions] = useState([])
    // const[data,setData]=useState([])
    const [search, setSearch] = useState("")
    const [filteredResults, setFilteredResults] = useState([])
    // const [loading,setLoading]=useState(false);
  
  
    const getCustomers = async () => {
      try {
        const response = await axios.get('https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/loans/27?associations=all&exclude=guarantors,futureSchedule', {
          headers: {
            'fineract-platform-tenantid': 'default',
            'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
          }
  
        })
        
        // setTransactions(response.data.transactions)
        setTransactions(response.data)
        console.log(response)

        //setTransactions(response.data)
         setCustomer(response.data)
  
        setFilteredResults(response.data.transactions)
        
      } catch (error) {
        console.log(error)
      }
    }
  
  
    const columns = [
       
      {
        name: 'Date',
        selector: (row) => row.date,
        sortable: true,
        // cell: row => {
        //   return (
        //     <Link to="/customer">
        //       <div className="person">{row.date}</div>
        //     </Link>
        //   )
        // }
  
      },
      {
        name: 'Account Number',
           selector: (row) => data.accountNo

  
      },
      {
        name: 'Office',
        selector: (row) => row.officeName
  
      },
      {
        name: 'Amount',
        selector: (row) => row.currency.displaySymbol + row.amount
  
      },
    
      {
        name: 'Loan Type',
        selector: (row) => data.loanType
  
  
      },
      {
        name: 'Status',
        selector: (row) => row.device
  
  
      },
     
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
      <div className='home'>
      <Sidebar />
      
        <div className='customerprofile'>
        
        <div className="homeContainer">
        {/* <Topbar/> */}
        <div className="customerprofileContainer">
          
        <div className="top">
          <div className="topup">
            
          {/* <div className="widgets"> */}
          
        {/* </div> */}
          <Link to="/">
            <span>Home{'>'}</span>
            </Link>
            <span>Customer{'>'}</span>
            {/* <span className='log'>Customer Log</span> */}
            <span>Payments{'>'}</span>
            <span className='log'>Payment History</span>
          </div>
          <div className="topmiddle">
            <span className='profile'>Customer Profile</span>
            {/* <span className='customername'>{user.displayName}</span> */}

          </div>
          
          <div className="topbottom">
            <span >Customer data </span>
            
           {/* link works alright! <Link to='payments'> <span  className='customeractive'>Payment History   </span></Link> */}
           <span  className='customeractive'>Payment History   </span>
     
           
        
            <span>Device Association History </span>
           
            <span>Communication History  </span>
            
            
          </div>
          <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
          
          <hr className='topline' />
        </div>  
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
      </div>

      </div>
       
      </div>
     </div>
    )
  
}

export default PaymentHistory