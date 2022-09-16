import './sidebar.scss'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PaymentIcon from '@mui/icons-material/Payment';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import logo from '../../assets/ecoa-by-nexus.png'
import avatar from '../../assets/avatar.jpg'
import { Link } from 'react-router-dom';



function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/">
        <img src={logo} clasName="logo" alt="Burn Logo" />
        </Link>
      </div>
      <div className="center">
        <div className="profile">
          <img src={avatar} alt="" />
          <h5>Martin Mwanzo <br /> 
          <p className="text-gray-400 text-sm font-semibold dark:text-gray-300"> ecoa@burnmfg.com </p></h5>
        </div>
         {/* <div className="flex gap-5 items-center mt-6 border-color border-b-1 pb-6">
        <img
          className="rounded-full h-24 w-24"
          src={avatar}
          alt="user-profile"
        />
        <div>
          <p className="font-semibold text-xl dark:text-gray-200"> Michael Roberts </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">  Administrator   </p>
          <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> info@shop.com </p>
        </div>
      </div> */}

        <ul>
          <li>
            <BusinessIcon className='icon' />
            <span>Business Summary</span>
          </li>
          <Link to="/customer">
          <li>
            <GroupsIcon className='icon' />
            <span >Customers</span>
          </li>
          </Link>
          <li>
            
            <ViewQuiltIcon className='icon' />
            <span>Device Management</span>
          </li>
          <li>
            <PaymentIcon className="icon" />
            <span>All Payments</span>
          </li>
          <li>
            <ShowChartIcon className='icon' />
            <span>Loan Offering</span>
          </li>
          <li>
            <ChatBubbleOutlineIcon className='icon' />
            <span>Cummunication Tracker</span>
          </li>
          <li>
            <PrecisionManufacturingIcon className='icon' />
            <span>Production</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <hr />
          <li>
            <SettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar