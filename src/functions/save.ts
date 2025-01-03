import type { MUIDataTableState } from 'mui-datatables'

/**
 * Save DataTableState to localStorage
 */
export function save(storageKey: string, state: MUIDataTableState): void {
    const { selectedRows, data, displayData, ...savedState } = state

    localStorage.setItem(storageKey, JSON.stringify(savedState))
}
