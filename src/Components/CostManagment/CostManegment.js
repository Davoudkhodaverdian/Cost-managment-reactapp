import { Component } from "react";
import './CostManagment.css';
import ChartComponent from "../ChartComponent/ChartComponent";
import FormManagment from "../FormManagment/FormManagment";
import ModalDetailComponent from "../ModalDetailComponent/ModalDetailComponent";
import ShowSum from "../ShowSum/ShowSum";
import TableComponent from "../TableComponent/TableComponent";


class CostManagment extends Component {


    render() {

        return (
            <div className="main">
                <div className="container-custom top">
                    <div className="part-main">
                        <ShowSum />
                        <ChartComponent />
                    </div>
                    <div className="container-part part-main">
                        <FormManagment />
                    </div>
                </div>
                <div className="container-custom">
                    <TableComponent />
                </div>
                <div className="modal-div">
                    <ModalDetailComponent />
                </div>
            </div>
        );

    }

}

export default CostManagment;