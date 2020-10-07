import React, {Component} from 'react';

import BookListItem from "../book-list-item/book-list-item";
import {connect} from "react-redux";
import withBookstoreService from "../hoc/with-bookstore-service";
import {bookAddedToCart, booksError, booksLoaded, booksRequested} from "../../actions/actions";
import compose from "../../utils/compose";

import './book-list.css'
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

// import {bindActionCreators} from "redux";

const BookList = ({books, onAddedToCart}) => { // деструктурируем из props
    return (
        <ul className='book-list'>
            {
                books.map((book) => {
                    return (
                        <li key={book.id}>
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    );
};

class BookListContainer extends Component {

    componentDidMount() {
        //  //1. receive data
        //  const { bookstoreService, booksLoaded,
        //      booksRequested, booksError } = this.props;
        //
        //  booksRequested();// чтобы при каждой загрузке данных был виден спиннер
        //
        //  //2. dispatch action to store
        // bookstoreService.getBooks()
        //     .then( data => booksLoaded(data) )
        //     .catch( error => booksError(error) );

        this.props.fetchBooks();

    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <Spinner/>;
        }

        if (error) {
            return <ErrorIndicator/>
        }

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = (state) => {
    const {books, loading, error} = state.bookList;
    return {
        books,
        loading,
        error
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch({
//                 type: 'BOOKS_LOADED',
//                 payload: newBooks
//             });
//         }
//     }
// } ;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch(booksLoaded(newBooks));
//         }
//     }
// } ;

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({booksLoaded}, dispatch);
// };

// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// };

const mapDispatchToProps = (dispatch, ownProps) => {
    const {bookstoreService} = ownProps;
    return {
        fetchBooks: () => {
            dispatch(booksRequested());// чтобы при каждой загрузке данных был виден спиннер
            bookstoreService.getBooks()
                .then(data => dispatch(booksLoaded(data)))
                .catch(error => dispatch(booksError(error)));
        },
        // fetchBooks: fetchBooks(dispatch, bookstoreService) // если импортируем из экшнс
        // оставил в прежнем виде, для примера
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    }

};


// без функции compose :
// export default withBookstoreService()(
//     connect(mapStateToProps, mapDispatchToProps)(BookList));

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);