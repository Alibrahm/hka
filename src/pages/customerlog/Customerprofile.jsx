import './customerprofile.css'
import Sidebar from '../../components/sidebar/Sidebar'

import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from "axios";
import Widget from '../../components/widget/Widget'
import List from '../../components/table/Table'
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

import React from 'react'

const Customerprofile = () => {

  const { id } = useParams();

  const [user, setUser] = useState({})

  // const getUser = async () => {
  //   try {
  //     const response = await axios.get('https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/clients/1/', {
  //       headers: {
  //         'fineract-platform-tenantid': 'default', 
  //         'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp' 
  //       }

  //     })

  //     setUser(response.data.pageItems)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }


  useEffect(() => {
    if (id) {
      axios.get(`https://hsu36wspzq.eu-west-1.awsapprunner.com/fineract-provider/api/v1/clients/${id}/`, {
        headers: {
          'fineract-platform-tenantid': 'default',
          'Authorization': 'Basic bWlmb3M6OUtxeSZzcDgmRCFp'
        }
      })
        .then(res => {
          console.log(res)
          setUser(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [id]);


  return (
    <div className='customerprofile'>
      <Sidebar />
      <div className="customerprofileContainer">
        <div className="top">
          <div className="topup">
          <Link to="/">
            <span>Home{'>'}</span>
            </Link>
            <span>Customer{'>'}</span>
            <span className='log'>Customer Log</span>
          </div>
          <div className="topmiddle">
            <span className='profile'>Customer Profile</span>
            <span className='customername'>{user.displayName}</span>

          </div>
          <div className="topbottom">
            <span className='customeractive'>Customer data</span>
           <Link to='payments'> <span  className='customeractive'>Payment History</span></Link>
            <span>Device Association History</span>
            <span>Communication History</span>
          </div>
          <hr className='topline' />
        </div>

        <div className="bottom">
          <div className="bottomtop">
            <div class="avatar">
              <div class="avatar__letters">LS</div>
            </div>
            <div className='name_epc'>
            <span className="nameepc">{user.displayName}</span>
            <span className="epc">EPC4546</span>
            </div>

          </div>
          <div className="bottombottom">
            <div className="left">
              <div className="customer_details ">
               <h5>BASIC DETAILS</h5>
               <div className="customerdetails_specs">
               <h6>Account Number</h6>
               <span className='btmleft'>{user.accountNo}</span>
               </div>
               <div className="customerdetails_specs">
               <h6>ID Number</h6>
               <span  className='btmleft'>{user.externalId}</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Phone Number</h6>
               <span  className=' btmleft'>{user.mobileNo}</span>
               </div>
              </div>
              <div className="device_details">
              <h5>DEVICE DETAILS</h5>
               <div className="customerdetails_specs">
               <h6>Device Name</h6>
               <div className="device_detailsname">
               <span className='btmleft'>ECOA EPC  -40043271 </span> <br />
               <span className='btmleft'>ECOA Induction  -40043271 </span> <br />
               <button>Add Device</button>
               </div>
               </div>
              </div>
            </div>
            <hr />
            <div className="center">
              <div className="payplan">
              <h5>PAYPLAN</h5>
               <div className="customerdetails_specs">
               <h6>Current Loan Type</h6>
               <span className='btmleft'>Basic</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Deposit</h6>
               <span  className='btmleft'>KES 3000</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Installment</h6>
               <span  className=' btmleft'>KES 300</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Payment Period</h6>
               <span  className=' btmleft'>15 Weeks</span>
               </div>
               </div>
               <h5>LOAN DETAILS</h5>
               <div className="customerdetails_specs">
               <h6>Loan Status</h6>
               <span className='btmleft'>On Track</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Total Paid</h6>
               <span  className='btmleft'>KES 4000</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Loan Balance</h6>
               <span  className=' btmleft'>KES 2000</span>
               </div>
            </div>
            <hr />
            <div className="right">
              <div className="communication_details">
              <h5>COMMUNICATION DETAILS</h5>
               <div className="customerdetails_specs">
               <h6>Communication Campaign</h6>
               <span className='btmleft'>Basic</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Communication Campaign</h6>
               <span  className='btmleft'>Basic</span>
               </div>
               <div className="customerdetails_specs">
               <h6>Communiaction Campaign</h6>
               <span  className=' btmleft'>Basic</span>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customerprofile