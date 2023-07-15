import { createContext } from 'react';
import { TableColumn } from './Head';

interface ITableContext {
    data: any[];
    columns: TableColumn[];
    onSort: Function;
}

export const TableContext = createContext<ITableContext>({
    data: null,
    columns: null,
    onSort: null,
});
