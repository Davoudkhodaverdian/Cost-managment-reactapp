


import { numberToWords } from "@persian-tools/persian-tools";

import { useState, useContext } from "react";
import CostManagmentContext from './../../Contexts/CostManagmentContext'


export default function Form() {
    const [state, setState] = useState({
        incomeChecked: true,
        amount: "",
        day: "",
        month: "",
        year: "",
        explain: "",
        persianValue: "صفر"
    })

    const context = useContext(CostManagmentContext);

    function validation(event) {

        event.preventDefault();

        let income = event.target.querySelector("input[id='income']");
        let amount = event.target.querySelector("input[id='amount']");
        let day = event.target.querySelector("input[id='day']");
        let month = event.target.querySelector("input[id='month']");
        let year = event.target.querySelector("input[id='year']");
        let explain = event.target.querySelector("input[id='explain']");

        if (isNaN(Number(amount.value)) || Number(amount.value) == 0)
            return alert("مبلغ را به درستی وارد کنید");
        else if (isNaN(Number(day.value)) || Number(day.value) == 0 || Number(day.value) > 31)
            return alert("روز را به درستی وارد کنید");
        else if (isNaN(Number(month.value)) || Number(month.value) == 0 || Number(month.value) > 12)
            return alert("ماه را به درستی وارد کنید");
        else if (isNaN(Number(year.value)) || Number(year.value) == 0)
            return alert("سال را به درستی وارد کنید");

        let data = {
            date: (year.value + "/" + month.value + "/" + day.value),
            costType: (income.checked ? "income" : "cost"),
            text: explain.value,
            amount: amount.value,
            id: Date.now(),
        }
        context.addRow(data)

    }

    function changeCostType() {
        setState(prevState => ({ incomeChecked: !prevState.incomeChecked }))
    }

    function setValueInput(name, event) {
        setState({ [name]: event.target.value })
    }

    function setPersian(event) {
        let num = !isNaN(Number(event.target.value)) ? numberToWords(Number(event.target.value)) : "";
        setState({ persianValue: num })
    }

    let { incomeChecked, amount, day, month, year, explain } = state;

    return (
        <div className="" dir="rtl">
            <form onSubmit={validation.bind(this)} className=''>
                <div className="flex">
                    <div className="p-2">
                        <label htmlFor="cost" className="pl-2 cursor-pointer">هزینه</label>
                        <input type="radio" id="cost" name="cost-manager" className="cursor-pointer"
                            onChange={changeCostType.bind(this)} checked={!incomeChecked}
                        />
                    </div>
                    <div className="p-2">
                        <label htmlFor="income" className="pl-2 cursor-pointer">درآمد</label>
                        <input type="radio" id="income" name="cost-manager" className="cursor-pointer"
                            onChange={changeCostType.bind(this)} checked={incomeChecked}
                        />
                    </div>
                </div>

                <div>
                    <div>
                        <div className="m-1"><label htmlFor="amount">مبلغ</label></div>
                        <div>
                            <input type="text" id="amount" name="cost-manager"
                                value={amount} onChange={setValueInput.bind(this, "amount")}
                                onKeyUp={setPersian.bind(this)} placeholder="مبلغ"
                                className="bg-white w-full border border-gray-300 rounded-md mb-1 shadow pr-3 pl-10 py-2 text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
                <div className="h-6">
                    <div className="">{state.persianValue}</div>
                </div>
                <div>
                    <div className="m-1">
                        <label htmlFor="date">تاریخ</label>
                    </div>
                    <div className="md:flex">
                        <div  className="md:ml-1">
                            <input type="text" id="year" name="cost-manager"
                                className="bg-white w-full p-2 border border-gray-300 rounded-md mb-1 shadow pl-10 py-2 text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={year} placeholder="سال" onChange={setValueInput.bind(this, "year")} />
                        </div>
                        <div  className="md:ml-1">
                            <input type="text" id="month" name="cost-manager"
                                className="bg-white w-full p-2 border border-gray-300 rounded-md mb-1 shadow  pl-10 py-2 text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={month} placeholder="ماه" onChange={setValueInput.bind(this, "month")} />
                        </div>
                        <div  className="md:ml-1">
                            <input type="text" id="day" name="cost-manager"
                                className="bg-white w-full p-2 border border-gray-300 rounded-md mb-1 shadow pl-10 py-2 text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={day} placeholder="روز" onChange={setValueInput.bind(this, "day")} />
                        </div>
                    </div>

                </div>
                <div className="explain input-custom">
                    <div>
                        <div className="m-1">
                            <label htmlFor="explain">توضیحات</label>
                        </div>
                        <div>
                            <input type="text" id="explain" name="cost-manager" placeholder="توضیحات"
                            className="bg-white w-full border border-gray-300 rounded-md mb-1 shadow pr-3 pl-10 py-2 text-right focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                value={explain} onChange={setValueInput.bind(this, "explain")} />
                        </div>
                    </div>
                </div>
                <input className="p-2 rounded text-white text-center  bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1 my-2"
                 type="submit" value="ثبت دخل و خرج" />
            </form>
        </div>
    )

}
