
import CostManagmentContext from "../../Contexts/CostManagmentContext"
import  { useContext } from "react";

export default function ShowSum () {

    const context = useContext(CostManagmentContext);

   const setIncomeSum = ()=> {
        let dataIncome = context.Rows.filter((elem, index) => elem["costType"] == "income");
        let dataamount = dataIncome.map((elem, index) => elem["amount"]);
        let sum = 0;
        dataamount.forEach((elem, index) => sum += Number(elem));
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const  setCostSum =()=> {

        let dataCost = context.Rows.filter((elem, index) => elem["costType"] == "cost");
        let dataamount = dataCost.map((elem, index) => elem["amount"]);
        let sum = 0;
        dataamount.forEach((elem, index) => sum += Number(elem));
        return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

        let IncomeSum = setIncomeSum()
        let CostSum = setCostSum()

        return (
            <div className="">
                <div className="flex justify-between">
                    <div className="m-3">
                        <div>مخارج</div>
                        <div className="text-red-500">{CostSum}</div>
                    </div>
                    <div className="m-3">
                        <div>درآمد</div>
                        <div className="text-green-500">{IncomeSum}</div>
                    </div>
                </div>

            </div>
        )
    
}

