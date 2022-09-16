import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Table from '../../components/table/Table'
import Topbar from '../../components/topbar/Topbar'
import Datatable from '../../components/datatable/Datatable'

function Home() {
  return (
    <div className='home'>
       <Sidebar />
      <div className="homeContainer">
        <Topbar/>
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
        <div className="listContainer">
          <Datatable/>
        </div>

      </div>
    </div>
  )
}

export default Home



