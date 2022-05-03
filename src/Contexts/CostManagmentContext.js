import React from "react";

const todosContext = React.createContext({
    Rows: [],
    cols: [],
    removeRow: () => { },
    refreshTable: () => { },
    showDetail: () => { },
    addRow: () => { },
});

export default todosContext;