export const ADD = (item:any) =>{ 
    return (
        {
            type: 'ADD_CART',
            payload:item
        }
    )
}

export const REMOVE = (item:any) =>{ 
    return (
        {
            type: 'REMOVE_CART',
            payload:item
        }
    )
}

export const UPDATE = (item:any) =>{ 
    return (
        {
            type: 'UPDATE_CART',
            payload:item
        }
    )
}

export const DELETE = (item:any) =>{ 
    return (
        {
            type: 'DELETE_CART',
            payload:item
        }
    )
}