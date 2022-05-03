import { Component } from "react";
import CostManagmentContext from "../../Contexts/CostManagmentContext"
import "./FormManagment.css"

class FormManagment extends Component {

    state = {
        incomeRadioChecked: true,
        amount: "",
        day: "",
        month: "",
        year: "",
        explain: "",
    }

    static contextType = CostManagmentContext;

    validation(event) {

        event.preventDefault();

        let incomeRadio = event.target.querySelector("input[id='income']");
        let amountRadio = event.target.querySelector("input[id='amount']");
        let dayRadio = event.target.querySelector("input[id='day']");
        let monthRadio = event.target.querySelector("input[id='month']");
        let yearRadio = event.target.querySelector("input[id='year']");
        let explainRadio = event.target.querySelector("input[id='explain']");

        console.log(localStorage)
        if (isNaN(Number(amountRadio.value)) || Number(amountRadio.value) == 0)
            return alert("مبلغ را به درستی وارد کنید");
        else if (isNaN(Number(dayRadio.value)) || Number(dayRadio.value) == 0 || Number(dayRadio.value) > 31)
            return alert("روز را به درستی وارد کنید");
        else if (isNaN(Number(monthRadio.value)) || Number(monthRadio.value) == 0 || Number(monthRadio.value) > 12)
            return alert("ماه را به درستی وارد کنید");
        else if (isNaN(Number(yearRadio.value)) || Number(yearRadio.value) == 0)
            return alert("سال را به درستی وارد کنید");

        let key = Date.now().toString();
        let array = [
            Number(amountRadio.value), (yearRadio.value + "/" + monthRadio.value + "/" + dayRadio.value),
            (incomeRadio.checked ? "درآمد" : "هزینه"), explainRadio.value, key
        ];

        
        this.context.addRow([key, array.join(",")])
        
    }

    changeCostType() {
        this.setState(prevState => ({ incomeRadioChecked: !prevState.incomeRadioChecked }))
    }

    setValueInput(name, event) {
        this.setState({ [name]: event.target.value })
    }

    render() {

        let { incomeRadioChecked, amount, day, month, year, explain } = this.state;

        return (
            <div className="part">
                <form onSubmit={this.validation.bind(this)}>
                    <div className="radio input-custom">
                        <div>
                            <label htmlFor="cost">هزینه</label>
                            <input type="radio" id="cost" name="cost-manager"
                                onChange={this.changeCostType.bind(this)} checked={!incomeRadioChecked}
                            />
                        </div>
                        <div>
                            <label htmlFor="income">درآمد</label>
                            <input type="radio" id="income" name="cost-manager"
                                onChange={this.changeCostType.bind(this)} checked={incomeRadioChecked}
                            />
                        </div>
                    </div>

                    <div className="amount input-custom">
                        <div>
                            <div>
                                <label htmlFor="amount">مبلغ</label>
                            </div>
                            <div>
                                <input type="text" id="amount" name="cost-manager"
                                    value={amount} onChange={this.setValueInput.bind(this, "amount")} />
                            </div>
                        </div>
                    </div>
                    <div className="input-custom">
                        <div className="persian-text-number">صفر</div>
                    </div>
                    <div className="date input-custom">
                        <div>
                            <div>
                                <label htmlFor="date">تاریخ</label>
                            </div>
                            <div className="date-input">
                                <div>
                                    <input type="text" id="year" name="cost-manager"
                                        value={year} placeholder="سال" onChange={this.setValueInput.bind(this, "year")} />
                                </div>
                                <div>
                                    <input type="text" id="month" name="cost-manager"
                                        value={month} placeholder="ماه" onChange={this.setValueInput.bind(this, "month")} />
                                </div>
                                <div>
                                    <input type="text" id="day" name="cost-manager"
                                        value={day} placeholder="روز" onChange={this.setValueInput.bind(this, "day")} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="explain input-custom">
                        <div>
                            <div>
                                <label htmlFor="explain">توضیحات</label>
                            </div>
                            <div>
                                <input type="text" id="explain" name="cost-manager"
                                    value={explain} onChange={this.setValueInput.bind(this, "explain")} />
                            </div>
                        </div>
                    </div>
                    <input className="btn btn-sm btn-success" type="submit" value="ثبت دخل و خرج" />
                </form>
            </div>
        )
    }
}

export default FormManagment;