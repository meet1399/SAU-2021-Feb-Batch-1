import React from 'react';
import {Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle} from "reactstrap";

function BookDetail ({book})
{
    return(
        <Card key = {book.id} style = {{color: 'white',marginTop: '50px', cursor:'auto', boxShadow: "1px 3px 1px #9E9E9E", padding: 5 , backgroundColor: 'black', borderRadius: 20}} >
                <CardHeader>
                    <CardTitle style={{textAlign:'center'}}>
                        <h4>{book.name}</h4>
                    </CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle> 
                        <h4 style={{marginTop: 15}}>Author</h4>
                        {book.author}                     
                    </CardSubtitle>
                    <CardText style={{textAlign: 'justify'}}>
                        <h4 style={{marginTop: 15}}>Description</h4>
                        {book.desc}
                    </CardText>
                </CardBody>
        </Card>
    )
}

export default BookDetail;