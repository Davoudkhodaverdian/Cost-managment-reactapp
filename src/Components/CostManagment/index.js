

import ChartComponent from "../ChartComponent/ChartComponent";
import Form from "../Form";
import ModalDetailComponent from "../ModalDetailComponent/ModalDetailComponent";
import ShowSum from "../ShowSum/ShowSum";
import TableComponent from "../TableComponent/TableComponent";
import { useState } from "react";
import CostManagmentContext from "../../Contexts/CostManagmentContext"

export default function CostManagment() {

    let initialData = [
        {
            amount: 180000,
            date: '1400/3/6',
            costType: 'income', //cost or income
            text: "درآمد امروز",
            id:1
        },
        {
            amount: 12000,
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

    function showDetail(id, ModalState) {
        setState(prevState => ({...prevState, ModalState: ModalState, CurrentModal: id }));
    }

    let { Rows, ModalState, CurrentModalKey } = state;

    return (
        <CostManagmentContext.Provider value={{
            Rows: Rows,
            ModalState: ModalState,
            removeRow: removeRow,
            showDetail: showDetail,
            addRow: addRow,

        }}>
            <div className="flex container justify-center">
            <div className="flex flex-col ">
                <div className="mt-3 flex justify-between">
                    <div className="p-2 shadow rounded  m-2">

                        <ShowSum />
                        {/* <ChartComponent /> */}
                    </div>


                    <div className="p-2 shadow rounded m-2 ">
                        <Form/>
                    </div>
                </div>
                <div className="flex justify-center">
                    <TableComponent />
                </div>
                <div className="">
                    <ModalDetailComponent Modal={CurrentModalKey} show={ModalState} />
                </div>
            </div>
            </div>
        </CostManagmentContext.Provider>
    );

}
