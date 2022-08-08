import { useContext } from "react";
import RowComponent from "../RowComponent/RowComponent";
import CostManagmentContext from "../../Contexts/CostManagmentContext"


export default function TableComponent() {

    const context = useContext(CostManagmentContext);

    let { Rows } = context;

    return (
        <div className="m-3 shadow  overflow-y-auto rounded  text-center w-full max-w-[1100px] max-h-[250px]">
   
            <table className="w-full border-collapse shadow ">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="py-2 px-4"></th>
                        <th className="py-2 px-4">توضیحات</th>
                        <th className="py-2 px-4">نوع هزینه</th>
                        <th className="py-2 px-4">تاریخ</th>
                        <th className="py-2 px-4">مبلغ</th>
                        <th className="py-2 px-4">ردیف</th>
                    </tr>
                </thead>
                <tbody>
                    {Rows.map((item, index) => (<RowComponent key={item["id"]} item={item} indexRow={index} rowNumber={Rows.length} />))}
                </tbody>
            </table>

        </div>
    )

}
