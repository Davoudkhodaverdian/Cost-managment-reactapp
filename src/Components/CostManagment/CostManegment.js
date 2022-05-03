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
        Rows: Object.entries(localStorage).map(([key, value]) => value.split(","))
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

    showDetail(key) {

    //     let dataArray = Object.entries(localStorage).map(([key, value]) => value.split(","));
    //     let data = null;
    //     dataArray.forEach((item) => {
    //         if (item[cols.indexOf("key")] == key) data = item;
    //     })

    //     document.querySelector(".modal-div").innerHTML = `
    //     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //       <div class="modal-dialog">
    //         <div class="modal-content">
    //           <div class="modal-header">
    //             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //           </div>
    //           <div class="modal-body modal-body-custom">
    //           <div>مبلغ: ${Number(data[cols.indexOf("amount")]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
    //           <div>تاریخ: ${data[cols.indexOf("date")]}</div>
    //           <div>نوع هزینه: ${data[cols.indexOf("costType")]}</div>
    //           <div>${data[cols.indexOf("explain")]} :توضیحات</div>
    //           </div>
    //           <div class="modal-footer">
    //             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //             </div>
    //         </div>
    //       </div>
    //       </div>`;

    //     window.myModal = new bootstrap.Modal(document.querySelector('.modal'), {})
    //     myModal.show();

     }

    render() {

        let {Rows} = this.state;

        return (
            <CostManagmentContext.Provider value={{
                Rows: Rows,
                cols: this.cols,
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
                    <ModalDetailComponent />
                </div>
            </div>
            </CostManagmentContext.Provider>
        );

    }

}

export default CostManagment;