import type { MUIDataTableExpandButton } from 'mui-datatables'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import RemoveIcon from '@mui/icons-material/Remove'

const ExpandButton = ({
    areAllRowsExpanded,
    buttonClass,
    expandableRowsHeader,
    expandedRows,
    iconClass,
    iconIndeterminateClass,
    isHeaderCell,
    onExpand
}: MUIDataTableExpandButton) => {
    const isNotExpand =
        isHeaderCell &&
        areAllRowsExpanded &&
        !areAllRowsExpanded() &&
        expandedRows.data.length > 0

    return (
        <IconButton
            onClick={onExpand}
            style={{ padding: 0 }}
            disabled={expandableRowsHeader === false}
            className={buttonClass}
        >
            {isNotExpand ? (
                <RemoveIcon
                    id="expandable-button"
                    className={iconIndeterminateClass}
                />
            ) : (
                <KeyboardArrowRightIcon
                    id="expandable-button"
                    className={iconClass}
                />
            )}
        </IconButton>
    )
}

export default ExpandButton
