import { Component } from "react";
import CostManagmentContext from "../../Contexts/CostManagmentContext"
import "./RowComponent.css"

class RowComponent extends Component {

    static contextType = CostManagmentContext;
    render() {

        let { array, rowNumber } = this.props;
        let { cols,showDetail,removeRow } = this.context;
        let arrngedRows = ["explain", "costType", "date", "amount", "row"];
        let key = array[cols.indexOf("key")];

        return (
            <tr>
                <td>
                    <button type="button" className="btn btn-sm btn-primary show" onClick={showDetail.bind(this, key,true)}>نمایش</button>
                    <button type="button" className="btn btn-sm btn-danger remove" onClick={removeRow.bind(this, key)}>حذف</button>
                </td>
                {
                    arrngedRows.map((element, index) => {

                        let valueElement = array[cols.indexOf(element)];
                        if (element == "row") return <td key={index}>{rowNumber}</td>;
                        else if (element == "amount") return <td key={index}>{valueElement.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>;
                        else if (element == "costType")
                            return <td key={index}><span className={(valueElement == "هزینه" ? "cost" : "income") + "-sum"}>{valueElement}</span></td>
                        else return <td key={index}>{valueElement}</td>;

                    })
                }
            </tr>
        )
    }
}

export default RowComponent;