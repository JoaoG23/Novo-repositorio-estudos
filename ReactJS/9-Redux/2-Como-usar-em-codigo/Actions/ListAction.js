const addListAction = ( item ) => {
    return {
        type: 'ADD_ITEM',
        payload: item,
    }
}

module.exports = { addListAction }