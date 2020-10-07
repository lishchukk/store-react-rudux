
const booksRequested = () => {
    return{
        type: 'FETCH_BOOKS_REQUEST'
    }
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload: newBooks
    }
};

const booksError = (error) => {
    return {
        type: 'FETCH_BOOKS_FAILURE',
        payload: error
    }
};

const bookAddedToCart = (bookId) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookId
    }
};

const bookRemovedFromCart = (bookId) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
};

const allBookRemovedFromCart = (bookId) => {
    return {
        type: 'ALL_BOOK_REMOVED_FROM_CART',
        payload: bookId
    }
};


// const fetchBooks = ( dispatch, bookstoreService ) => () => {
//     dispatch( booksRequested() );// чтобы при каждой загрузке данных был виден спиннер
//     bookstoreService.getBooks()
//         .then( data => dispatch( booksLoaded(data) ) )
//         .catch( error => dispatch( booksError(error) ) );
// };
// для переиспользования, логичнее обьявлять ее здесь, так как она используется с редаксом


export {
    booksLoaded,
    booksRequested,
    booksError,
    bookAddedToCart,
    bookRemovedFromCart,
    allBookRemovedFromCart
    // fetchBooks
}