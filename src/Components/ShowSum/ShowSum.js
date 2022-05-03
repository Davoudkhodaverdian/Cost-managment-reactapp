import { Component } from "react";
import CostManagmentContext from "../../Contexts/CostManagmentContext"

class ShowSum extends Component {
    static contextType = CostManagmentContext;

    setIncomeSum() {
        let cols = this.context.cols;
        let dataIncome = this.context.Rows.filter((elem, index) => elem[cols.indexOf("costType")] == "درآمد");
        let dataamount = dataIncome.map((elem, index) => elem[cols.indexOf("amount")]);
        let sum = 0;
        dataamount.forEach((elem, index) => sum += Number(elem));
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    setCostSum() {
        let cols = this.context.cols;
        let dataCost = this.context.Rows.filter((elem, index) => elem[cols.indexOf("costType")] == "هزینه");
        let dataamount = dataCost.map((elem, index) => elem[cols.indexOf("amount")]);
        let sum = 0;
        dataamount.forEach((elem, index) => sum += Number(elem));
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {

        let IncomeSum = this.setIncomeSum()
        let CostSum = this.setCostSum()

        return (
            <div className="container-part show-cost-income">
                <div className="cost-income">
                    <div className="cost">
                        <div>مخارج</div>
                        <div className="cost-sum">{CostSum}</div>
                    </div>
                    <div className="income">
                        <div>درآمد</div>
                        <div className="income-sum">{IncomeSum}</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ShowSum;