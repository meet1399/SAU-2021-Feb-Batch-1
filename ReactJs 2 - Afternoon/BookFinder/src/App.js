
import './App.css';
import {Switch,BrowserRouter,Route} from "react-router-dom";
import AllBooks from "./components/AllBooks";
import BookDetail from "./components/BookDetail";

function App() {
  let bookdata =[
    {
        id : "1",
        name : "THE GOD OF SMALL THINGS",
        author : "Arundhati Roy",
        desc : "The God of Small Things by Arundhati Roy is a story about the childhood experiences of fraternal twins Esthappen and Rahel, whose lives are destroyed by the “Love Laws” that are laid down by the society."+
        "The book explores how the small things affect people’s behaviour and their lives. It won the Booker Prize in 1997."
    },
    {
        id : "2",
        name : "SACRED GAMES",
        author : "Vikram Chandra",
        desc : "Sacred Games draws the reader deep into the life of Inspector Sartaj Singh, and into the criminal underworld of Ganesh Gaitonde, the most wanted gangster in India."+
        "It is a story of friendship and betrayal, of terrible violence, of an astonishing modern city and its dark side."
    },
    {
        id : "3",
        name : "MRS FUNNYBONES",
        author : "Twinkle Khanna",
        desc : "Full of wit and delicious observations, Mrs Funnybones captures the life of the modern Indian woman — a woman who organizes dinner each evening, even as she goes to work all day, who runs her own life but has to listen to her Mummyji, who worries about her weight and the state of the country."
    },
    {
        id : "4",
        name : "ALL ROADS LEAD TO GANGA ",
        author : "Ruskin Bond",
        desc : "The Ganges is a river which has held India’s heart captive and drawn uncounted millions to her banks since the dawn of history."+
        "In All Roads Lead to Ganga, Ruskin Bond captures the breathtaking beauty and splendour of Ganga, describing with nostalgia and affection the places and people he has lived with and encountered for over forty years."
    },
    {
        id : "5",
        name : "THE STORY OF MY EXPERIMENTS WITH TRUTH",
        author : "Mohandas K. Gandhi",
        desc : "The Story Of My Experiments with Truth is the autobiography of Mohandas K. Gandhi, covering his life from early childhood through to 1921."+
        "It was written in weekly instalments and published in his journal Navjivan from 1925 to 1929. The English translation was done by Mahadev Desai."
    },
    {
      id : "6",
      name : "ASURA: TALE OF THE VANQUISHED",
      author : "Anand Neelakantan",
      desc : "Anand Neelakantan’s Asura: Tale of the Vanquished depicts the tale of Ramayana from the viewpoint of Ravana and a common Asura, Bhadra."+
      "The book attempts to highlight the voice of the vanquished as opposed to the victor’s version of Ramayana that is commonly known."
    },
    {
      id : "7",
      name : "THE DEVIL’S WIND",
      author : "Manohar Malgonkar",
      desc : "The Devil’s Wind by Manohar Malgonkar tells the story of Nana Saheb, who played a leading role in the 1857 War of Independence."+
      "It provides a sympathetic portrait of a man whom the British portrayed as a great villain."
    },
    
  ];

  const matchId = (props) =>{
    const id = props.match.params.id;
    return (
        <BookDetail book={bookdata.filter((book)=> book.id === id)[0]}/>
    )
  }

  const getAllBooks=()=>{
    return (
      <AllBooks allbooks={bookdata}/>
    )
  } 
  

return (
  <div style={{height: '200'}}>
      <h1 style={{ marginTop: 0, backgroundColor: 'black', color: 'white', textAlign: 'center', padding: 10}}>Book Finder</h1>

      <BrowserRouter>
          <Switch>
              <Route path={'/'} component={getAllBooks} exact></Route>
              <Route path={'/:id'} component={matchId}></Route>
          </Switch>
      </BrowserRouter>
  </div>
);

}

export default App;
