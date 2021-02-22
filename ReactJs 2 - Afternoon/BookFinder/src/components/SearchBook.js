import {Link} from "react-router-dom";
import {Button} from "reactstrap";

function SearchBook ({books})
{

    const search =  (books.map((item) => {
      return (
         <div >
             <Link to={`/${item.id}`} style={{textDecoration:'none'}}>
                <Button style={{ marginLeft: 160, borderRadius:'0px',width:'400px'}} >
                    {item.name}
                </Button>
             </Link>
             
        </div>
      )
    }))

    return (
        <div>
            {search}
        </div>
    )
}

export default SearchBook;