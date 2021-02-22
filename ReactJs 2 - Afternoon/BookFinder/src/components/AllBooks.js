import React,{useState} from "react";
import {Link} from "react-router-dom";
import SearchBook from "./SearchBook";
import {Card, CardHeader, CardTitle} from "reactstrap";

function AllBooks({allbooks})
{
  
    const books = allbooks;
    const [searchBook, setSearchBook] = useState('..');
    const doSearch = () =>
    {
        return books.filter((item) => item.name.toLowerCase().includes(searchBook.toLowerCase()));
    }

    const setBook = (e) =>
    {
        if(e.target.value !== '')
            setSearchBook(e.target.value)
        else
            setSearchBook('..')

    }

    const BookList = () =>
    {
        return books.map((book) =>
        {
            return(
                <Card key = {book.id} style = {{cursor:'pointer', boxShadow: "1px 3px 1px #9E9E9E", height: '40px', backgroundColor: 'black', borderRadius: 20, marginLeft: 10, marginTop: 25}} >
                    <Link to={`/${book.id}`} style = {{color:'white', justifyContent:'center', textDecoration:'none'}}>
                        <CardHeader>
                            <CardTitle style={{textAlign:'center'}}>
                            {book.name}
                            </CardTitle>
                        </CardHeader>
                    </Link>
                </Card>
            )
        })
    }; 

    return(
        <div>
            <table>
                <th><h3>List of all the Books </h3></th>
                <th></th>
                <tr>
                    <td><BookList /> </td>
                    <td>
                    <input style={{width: 300, height: 30, marginLeft: 200}} type={'text'} onChange={setBook}  placeholder={'Search Your Book'} />
                    <SearchBook books={doSearch()} />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default AllBooks;