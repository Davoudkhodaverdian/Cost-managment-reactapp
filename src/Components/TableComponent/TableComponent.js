import { Component } from "react";
import RowComponent from "../RowComponent/RowComponent";
import CostManagmentContext from "../../Contexts/CostManagmentContext"
import "./TableComponent.css"

class TableComponent extends Component {

    static contextType = CostManagmentContext;

    render() {

        let { Rows,cols } = this.context;
    
        return (
            <div className="table">
                <div className="table-part">

                    <table className="content-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>توضیحات</th>
                                <th>نوع هزینه</th>
                                <th>تاریخ</th>
                                <th>مبلغ</th>
                                <th>ردیف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Rows.map((item, index) => (<RowComponent key={item[cols.indexOf("key")]} array={item} rowNumber={index + 1} />))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default TableComponent;