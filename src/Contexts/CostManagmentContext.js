import React from "react";

const ManagmentContext = React.createContext({
    Rows: [],
    cols: [],
    removeRow: () => { },
    refreshTable: () => { },
    showDetail: () => { },
    addRow: () => { },
});

export default ManagmentContext;