import React, {Component} from "react";
import BookDataService from "../services/book.service";
import {Book} from '../models/book';

export default class BooksList extends Component {
    constructor(props) {
        super(props);
        this.retrieveBooks = this.retrieveBooks.bind(this);

        this.state = {
            books: [Book],
            currentBook: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }

    componentDidMount() {
        this.retrieveBooks();
    }

    retrieveBooks() {
        BookDataService.getAll()
            .then(response => {
                this.setState({
                    books: response.data["books"]
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const {books} = this.state;

        const listItems = books.map((book, index) => {
                if (index < 6) {
                    return <div key={book._id} className="col col-md-3 mb-4 " style={{}}>
                        <div style={{
                            background: "#00000033",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 350,
                            overflow: "hidden"
                        }}>
                            <img style={{
                                flexShrink: 0,
                                height: 350
                            }} key={book._id}
                                 src={process.env.REACT_APP_BASE_URL_BOOKS + book.coverId} alt=""
                            />
                        </div>
                        <div className="row mt-3 text-start">
                            <div className="col-md-1">
                                <div style={{width: 3, height: 100, background: "#7371B4"}}></div>
                            </div>
                            <div className="col-md-10">
                                <div style={{height: 30, textOverflow: "ellipsis", overflow: "hidden"}}>
                                    <b style={{textOverflow: "ellipsis", overflow: "hidden"}}>{book.title}</b>
                                </div>
                                <p style={{height: 70, textOverflow: "ellipsis", overflow: "hidden"}}>{book.description}</p>
                            </div>
                        </div>
                    </div>
                } else {
                    return <div></div>;
                }
            }
        );

        return (
            <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="text-center col-md-7">
                    <div style={{margin: 40}}></div>
                    <h1><b style={{color: "#7371B4"}}>Latest</b> books</h1>
                    <p>Books chosen for you</p>
                    <div className="table-group-divider"></div>
                    <div className="row mt-5">
                        {listItems}
                    </div>
                </div>
            </div>
        );
    }
}