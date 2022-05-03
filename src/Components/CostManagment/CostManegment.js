import { Component } from "react";
import './CostManagment.css';
import ChartComponent from "../ChartComponent/ChartComponent";
import FormManagment from "../FormManagment/FormManagment";
import ModalDetailComponent from "../ModalDetailComponent/ModalDetailComponent";
import ShowSum from "../ShowSum/ShowSum";
import TableComponent from "../TableComponent/TableComponent";
import CostManagmentContext from "../../Contexts/CostManagmentContext"
import 'bootstrap/dist/css/bootstrap.min.css';

class CostManagment extends Component {

    state = {
        Rows: Object.entries(localStorage).map(([key, value]) => value.split(",")),
        ModalState: false,
        CurrentModalKey: null,
    }

    cols = ["amount", "date", "costType", "explain", "key"];

    addRow([key, array]) {

        localStorage.setItem(key, array);
        this.setState(prevState => ({ Rows: [...prevState.Rows, array.split(",")] }));
    }

    removeRow(key) {

        localStorage.removeItem(key);
        this.setState(prevState => ({ Rows: [...prevState.Rows.filter(item => (item[this.cols.indexOf("key")] !== key))] }));
    }

    showDetail(key,ModalState) {
        
        this.setState({ ModalState: ModalState, CurrentModalKey: key });
    }

    render() {

        let { Rows, ModalState, CurrentModalKey } = this.state;

        return (
            <CostManagmentContext.Provider value={{
                Rows: Rows,
                cols: this.cols,
                ModalState: ModalState,
                removeRow: this.removeRow.bind(this),
                showDetail: this.showDetail.bind(this),
                addRow: this.addRow.bind(this),

            }}>
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
                        <ModalDetailComponent keyModal={CurrentModalKey} show={ModalState} />
                    </div>
                </div>
            </CostManagmentContext.Provider>
        );

    }

}

export default CostManagment;