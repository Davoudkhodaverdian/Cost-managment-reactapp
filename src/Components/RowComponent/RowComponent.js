import { Component } from "react";
import CostManagmentContext from "../../Contexts/CostManagmentContext"

class RowComponent extends Component {

    static contextType = CostManagmentContext;
    render() {

        let { array, rowNumber } = this.props;
        let cols = ["amount", "date", "costType", "explain", "key"];
        let arrngedRows = ["explain", "costType", "date", "amount", "row"];
        let key = array[cols.indexOf("key")];

        return (
            <tr>
                <td>
                    <button type="button" className="btn btn-sm btn-primary show" onClick={this.context.showDetail.bind(this,key)}>نمایش</button>
                    <button type="button" className="btn btn-sm btn-primary remove" onClick={this.context.removeRow.bind(this,key)}>حذف</button>
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