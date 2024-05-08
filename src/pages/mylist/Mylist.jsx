import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./mylist.scss";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Mydatatable from "../../components/mydatatable/Mydatatable";


const Mylist = () => {
  return (
    <div className="mylist">
      <Sidebar />
      <div className="mylistContainer">
      <Navbar />
      <div className="widgets">
         <Widget type="user"/>
         <Widget type="order"/>
      </div> 

        <div className="mydatatavleContainer">
        <Mydatatable></Mydatatable>
        </div>

      </div>
    </div>
  );
};

export default Mylist;