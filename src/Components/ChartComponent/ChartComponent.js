import { useContext } from "react";
import { Line } from "react-chartjs-2"
import CostManagmentContext from "../../Contexts/CostManagmentContext"

export default function ChartComponent () {

    const context = useContext(CostManagmentContext);

    function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

        let { Rows } = context;

        let sortData = Rows.sort((a, b) => {

            let aArray = a["date"].split("/").map(elem => Number(elem));
            let bArray = b["date"].split("/").map(elem => Number(elem));

            if (aArray[0] !== bArray[0]) return aArray[0] - bArray[0]
            else if (aArray[1] !== bArray[1]) return aArray[1] - bArray[1]
            else return aArray[2] - bArray[2]

        })

        let dataAmountIncome = sortData.filter((elem, index) => elem["costType"] == "درآمد");
        let dataIncome = dataAmountIncome.map((elem, index) => elem["amount"]);
        let dataAmountCost = sortData.filter((elem, index) => elem["costType"] == "هزینه");
        let dataCost = dataAmountCost.map((elem, index) => elem["amount"]);

        let labels = removeDuplicates(sortData.map((elem, index) => elem["date"]));

        let data = {
            labels: labels,
            datasets: [{
                label: 'درآمد',
                data: dataIncome,
                borderColor: "green",
                lineTension: 0.4,        
                radius: 3      

            }, {
                label: 'هزینه',
                data: dataCost,
                borderColor: "red",
                lineTension: 0.4,        
                radius: 3      

            },]

        }

        return (
            <div className="container-part">
                <div className="myChart">
                    <Line
                        data={data}
                        options={

                            {bezierCurve : false}
                        }
                    />
                </div>
            </div>
        )
    
}

