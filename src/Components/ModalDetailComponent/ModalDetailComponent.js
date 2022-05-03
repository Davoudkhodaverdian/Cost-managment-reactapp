import { Component } from "react";
import CostManagmentContext from "../../Contexts/CostManagmentContext"
import { Button, Modal } from "react-bootstrap"


class ModalDetailComponent extends Component {

    static contextType = CostManagmentContext;

 
    render() {
       
        let { show } = this.props
        let key = this.props.keyModal
        let { Rows, cols,showDetail } = this.context
        let data = null;
        Rows.forEach((item) => {
            if (item[cols.indexOf("key")] == key) data = item;
        })

        return (

            <>
                <Modal show={show} onHide={showDetail.bind(this, key,false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {key ? (<div className="modal-body modal-body-custom">
                            <div>مبلغ: {Number(data[cols.indexOf("amount")]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                            <div>تاریخ: {data[cols.indexOf("date")]}</div>
                            <div>نوع هزینه:{data[cols.indexOf("costType")]}</div>
                            <div>{data[cols.indexOf("explain")]} :توضیحات</div>
                        </div>) :
                            (<div></div>)

                        }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={showDetail.bind(this, key,false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        )
    }
}

export default ModalDetailComponent;