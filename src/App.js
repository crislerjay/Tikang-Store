import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import {db} from './firebase-config'
import {collection, getDocs} from 'firebase/firestore'


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([])
  const itemsCollectionRef = collection(db, 'data')
  
  useEffect(() => {
    const getItems = async () => {
      const data = await getDocs(itemsCollectionRef)
      setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getItems()
  }, [])

  return (
    <div className="App">
      <Navbar bg="danger" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className='text-light'>Tikang Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mt-4 mb-2">
              <Form.Control
                type="search"
                placeholder="Search..."
                className="me-2"
                aria-label="Search"
                onChange={(e) =>  setSearchTerm(e.target.value)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='px-2 mt-4 mb-4'>
        {
          items 
          .filter((item) => {
            if(searchTerm == ""){
              return item;
            }else if(item.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return item;
            }
          })
          .map((item) => {
            return(
              <div key={item.id} className="item shadow p-3 mb-3 bg-body rounded">
                <p className='fw-bold text-uppercase'>{item.name}</p>
                <div className='d-flex justify-content-between'>
                  <p className='mb-0'>{`₱${item.price}`}</p>
                  <p className='mb-0'>{item.each ? `₱${item.each}` : '' }</p>
                </div>
              </div> 
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
