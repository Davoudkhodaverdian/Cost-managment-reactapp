import { Component } from "react";


class FormManagment extends Component {


    render() {
        return (
            <div className="part">
                <form>
                    <div className="radio input-custom">
                        <div>
                            <label for="cost">هزینه</label>
                            <input type="radio" id="cost" name="cost-manager" value="" />
                        </div>
                        <div>
                            <label for="income">درآمد</label>
                            <input type="radio" id="income" name="cost-manager" value="" />
                        </div>
                    </div>

                    <div className="amount input-custom">
                        <div>
                            <div>
                                <label for="amount">مبلغ</label>
                            </div>
                            <div>
                                <input type="text" id="amount" name="cost-manager" value="" />
                            </div>
                        </div>
                    </div>
                    <div className="input-custom">
                        <div className="persian-text-number">صفر</div>
                    </div>
                    <div className="date input-custom">
                        <div>
                            <div>
                                <label for="date">تاریخ</label>
                            </div>
                            <div className="date-input">
                                <div>
                                    <input type="text" id="year" name="cost-manager" value="" placeholder="سال" />
                                </div>
                                <div>
                                    <input type="text" id="month" name="cost-manager" value="" placeholder="ماه" />
                                </div>
                                <div>
                                    <input type="text" id="day" name="cost-manager" value="" placeholder="روز" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="explain input-custom">
                        <div>
                            <div>
                                <label for="explain">توضیحات</label>
                            </div>
                            <div>
                                <input type="text" id="explain" name="cost-manager" value="" />
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