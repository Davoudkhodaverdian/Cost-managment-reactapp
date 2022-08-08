import { useContext } from "react";
import CostManagmentContext from './../../Contexts/CostManagmentContext'

export default function ModalDetailComponent({ show, keyModal }) {

    const context = useContext(CostManagmentContext);

    let id = keyModal
    let { Rows, showDetail } = context
    let data = null;
    Rows.forEach((item) => {
        if (item["id"] == id) data = item;
    })

    return (

        <>
            {/* <Modal show={show} onHide={showDetail.bind(this, id, false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {id ? (<div className="modal-body modal-body-custom">
                        <div>مبلغ: {Number(data["amount"]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                        <div>تاریخ: {data["date"]}</div>
                        <div>نوع هزینه:{data["costType"]}</div>
                        <div>{data["explain"]} :توضیحات</div>
                    </div>) :
                        (<div></div>)

                    }
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showDetail.bind(this, id, false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>

    )

}
