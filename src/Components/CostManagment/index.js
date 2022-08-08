
import Form from "../Form";
import ShowSum from "../ShowSum/ShowSum";
import TableComponent from "../TableComponent/TableComponent";
import { useState } from "react";
import CostManagmentContext from "../../Contexts/CostManagmentContext"
import ChartComponent from './../ChartComponent/ChartComponent'
export default function CostManagment() {

    let initialData = [
        {
            amount: 17000,
            date: '1400/3/6',
            costType: 'income', //cost or income
            text: "درآمد بففبف",
            id:1
        },
        {
            amount: 1806000,
            date: '1400/3/7',
            costType: 'income', //cost or income
            text: "درآمد ففف",
            id:1
        },
        {
            amount: 198000,
            date: '1400/3/8',
            costType: 'income', //cost or income
            text: "درآمد غقسیقفسق",
            id:1
        },
        {
            amount: 1200000,
            date: '1400/3/6',
            costType: 'cost',
            text: "سیب زمینی",
            id:2
        },
        {
            amount: 10000,
            date: '1400/3/7',
            costType: 'cost',
            text: "چیپس",
            id:3
        },
        {
            amount: 800000,
            date: '1400/3/8',
            costType: 'cost',
            text: "ماست موسیر",
            id:3
        }
    ]

    const [state, setState] = useState({
        Rows: initialData,
        ModalState: false,
        CurrentModalKey: null,
    })

    function addRow(data) {
        setState(prevState => ({...prevState, Rows: [...prevState.Rows,data ] }));
    }

    function removeRow(id) {
        setState(prevState => ({...prevState, Rows: [...prevState.Rows.filter(item => (item["id"] !== id))] }));
    }

    let { Rows, ModalState, CurrentModalKey } = state;

    return (
        <CostManagmentContext.Provider value={{
            Rows: Rows,
            ModalState: ModalState,
            removeRow: removeRow,
            addRow: addRow,

        }}>
            
            <div className="flex flex-col items-center ">
                <div className="mt-3 w-full md:flex justify-center">
                    <div className="p-2 shadow rounded m-2 md:min-w-[500px]">

                        <ShowSum />
                        <ChartComponent />
                        
                    </div>


                    <div className="p-2 shadow rounded m-2">
                        <Form/>
                    </div>
                </div>
                    <TableComponent />
    
            </div>
            
        </CostManagmentContext.Provider>
    );

}
