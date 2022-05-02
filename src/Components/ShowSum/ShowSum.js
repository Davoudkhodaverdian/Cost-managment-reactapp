import { Component } from "react";


class ShowSum extends Component {


    render() {
        return (
            <div className="container-part show-cost-income">
                <div className="cost-income">
                    <div className="cost">
                        <div>مخارج</div>
                        <div className="cost-sum">0</div>
                    </div>
                    <div className="income">
                        <div>درآمد</div>
                        <div className="income-sum">0</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default ShowSum;