import { useContext } from "react";
import CostManagmentContext from './../../Contexts/CostManagmentContext'

export default function RowComponent ({ item,indexRow, rowNumber }) {

    const context = useContext(CostManagmentContext);

        let { showDetail,removeRow } = context;
        let id = item["id"];
        return (
            <tr className={`text-gray-600 ${indexRow === rowNumber - 1 ? "" : "border-b border-gray-200 "}`}>
                <td>
                    <button type="button" className="p-1 rounded text-white text-center bg-violet-500 font-bold drop-shadow hover:bg-violet-600 active:bg-violet-700 focus:ring focus:ring-violet-300  mx-1" onClick={showDetail.bind(this, id,true)}>نمایش</button>
                    <button type="button" className="p-1 rounded text-white text-center bg-red-500 font-bold drop-shadow hover:bg-red-600 active:bg-red-700 focus:ring focus:ring-red-300  mx-1 " onClick={removeRow.bind(this, id)}>حذف</button>
                </td>
                {
                    ['text','costType','date','amount','row'].map((element, index) => {

                        let valueElement = item[element];
                        if (element == "row") return <td className="py-2 px-4 mx-2" key={index}>{indexRow+1}</td>;
                        else if (element == "amount") return <td className="py-2 px-4 mx-2" key={index}>{valueElement.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>;
                        else if (element == "costType") return <td className="py-2 px-4 mx-2" key={index}>{valueElement === 'income' ? 'درآمد' : 'هزینه'}</td>                                        
                        else return <td className="py-2 px-4 mx-2" key={index}>{valueElement}</td>;
                    })
                }
            </tr>
        )
    
}
