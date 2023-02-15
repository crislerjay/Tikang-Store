import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';

function App() {
  const data = [
    {name: 'Coke Kasalo', price: 30, id: 1},
    {name: 'RC Mega', price: 30, id: 2},
    {name: 'Coke small & cute', price: 12, id: 3},
    {name: 'Rc Small', price: 12, id: 4},
    {name: 'Coke mismo', price: 17, id: 5},
    {name: 'C2', price: 15, id: 6},
    {name: 'Sting & Cobra', price: 20, id: 7},
    {name: 'Yakult', price: 10, id: 8},
    {name: 'Delights', price: 12, id: 9},
    {name: 'Pineapple', price: 40, id: 10},
    {name: 'Mineral', price: 15, id: 11},
    {name: 'RH', price: 55, id: 12},
    {name: '2x2', price: 67, id: 13},
    {name: '4x4', price: 130, id: 14},
    {name: 'Empi 750ml', price: 125, id: 15},
    {name: 'Empi Litro', price: 170, id: 16},
    {name: 'Ice pop', price: 5, id: 17},
    {name: 'Chicken Salami', price: 40, id: 18},
    {name: 'Bologna', price: 40, id: 19},
    {name: 'Tocino', price: 60, id: 20},
    {name: 'Skinless', price: 35, id: 21},
    {name: 'Hotdog', price: 45, id: 22},
    {name: 'Longganisa', price: 50, id: 23},
    {name: 'Bagoong', price: 25, id: 24},
    {name: 'Mangtomas', price: 40, id: 25},
    {name: 'Ketchup', price: 35, id: 26},
    {name: 'Ketchup sachet', price: 15, id: 27},
    {name: 'Coco Mama', price: 35, id: 28},
    {name: 'Patis', price: 13, id: 29},
    {name: 'Toyo small', price: 8, id: 30},
    {name: 'Toyo big', price: 13, id: 31},
    {name: 'Suka small', price: 8, id: 32},
    {name: 'Suka big', price: 10, id: 33},
    {name: 'Tidbits', price: 25, id: 34},
    {name: 'Mushroom', price: 25, id: 35},
    {name: 'BBQ marinade', price: 45, id: 36},
    {name: 'Curry Powber', price: 30, id: 37},
    {name: 'Tomato Paste', price: 25, id: 38},
    {name: 'Tomato Sauce', price: 20, id: 39},
    {name: 'Magic Sarap', price: 5, id: 40},
    {name: 'Betsin', price: 4, id: 41},
    {name: 'Sinigang mix big', price: 18, id: 42},
    {name: 'Sinigang mix small', price: 9, id: 43},
    {name: 'Paminta', price: '1 each', id: 44},
    {name: 'Breadcrumbs', price: 25, id: 45},
    {name: 'Corned beef', price: 22, id: 46},
    {name: 'Meatloaf', price: 25, id: 47},
    {name: 'Fresca Tuna', price: 32, id: 48},
    {name: 'Fresca Sardines', price: 23, id: 49},
    {name: 'Mackerel', price: 34, id: 50},
    {name: 'Liverspread', price: 30, id: 51},
    {name: 'Lucky Me noodles', price: 10, id: 52},
    {name: 'Pancit Canton', price: 15, id: 53},
    {name: 'Nissin noodles', price: 15, id: 54},
    {name: 'Nissin noodles spicy', price: 18, id: 55},
    {name: 'Cup noodles', price: 25, id: 56},
    {name: 'Sotanghon', price: 7, id: 57},
    {name: 'Misua', price: 15, id: 58},
    {name: 'Premium coffee', price: 25, id: 59},
    {name: 'Granules coffee', price: 25, id: 60},
    {name: 'Nescafe coffee', price: 20, id: 61},
    {name: 'Sugar wash', price: 25, id: 62},
    {name: 'Sugar white', price: 26, id: 63},
    {name: 'Kopiko blancav', price: 14, id: 64},
    {name: 'Great taste white', price: 13, id: 65},
    {name: 'Nescafe white', price: 8, id: 66},
    {name: 'Kremtop', price: 22, id: 67},
    {name: 'Milo', price: 10, id: 68},
    {name: 'Birch tree', price: 10, id: 69},
    {name: 'Bearbrand', price: 12, id: 70},
    {name: 'Bearbrand adults', price: 20, id: 71},
    {name: 'Nestea apple', price: 24, id: 72},
    {name: 'Tang pineapple', price: 22, id: 73},
    {name: 'Mangtomas sachet', price: 8, id: 74},
    {name: 'Oyster sauce big', price: 15, id: 75},
    {name: 'Oyster sauce small', price: 7, id: 76},
    {name: 'Star margarine', price: 12, id: 77},
    {name: 'Mayonnaise big', price: 25, id: 78},
    {name: 'Mayonnaise small', price: 15, id: 79},
    {name: 'Magnolia sandwich spread', price: 15, id: 80},
    {name: 'Chicken spread', price: 15, id: 81},
    {name: 'Chizwiz', price: 15, id: 82},
    {name: 'Monggo', price: 25, id: 83},
    {name: 'Mantika litro', price: 75, id: 84},
    {name: 'Mantika half liter', price: 35, id: 85},
    {name: 'Buns tinapay', price: 22, id: 86},
    {name: 'Biscuits', price: '7 each', id: 87},
    {name: 'Fudgee bar', price: 8, id: 88},
    {name: 'Piatos & Nova', price: 17, id: 89},
    {name: 'Other Chitchirya big', price: 8, id: 90},
    {name: 'Candies', price: '1 each', id: 91},
    {name: 'Marlboro',  price: 160, each: '₱8 each', id: 92},
    {name: 'Winstons', price: 160, each: '₱8 each', id: 93},
    {name: 'Mighty', price: 120, each: '₱6 each', id: 94},
    {name: 'Fortune', price: 120, each: '₱6 each', id: 95},
    {name: 'Camel', price: 100, each: '₱5 each', id: 96},
    {name: 'Modern', price: 40, each: '₱2 each', id: 97},
    {name: 'Two moon', price: 40, each: '₱2 each', id: 98},
    {name: 'Wings powder', price: 7, id: 99},
    {name: 'Surf powder', price: 8, id: 100},
    {name: 'Ariel', price: 15, id: 101},
    {name: 'Calla', price: 7, id: 102},
    {name: 'Pride bar', price: 8, id: 103},
    {name: 'Champion bar', price: 13, id: 104},
    {name: 'Zonrox', price: 13, id: 105},
    {name: 'Zonrox color safe', price: 15, id: 106},
    {name: 'Downy', price: 9, id: 107},
    {name: 'Safeguard', price: 22, id: 108},
    {name: 'Shampoo', price: 7, id: 109},
    {name: 'Joy', price: 8, id: 110},
    {name: 'Conditioner', price: 8, id: 111},
    {name: 'Krratin', price: 9, id: 112},
    {name: 'Colgate', price: 12, id: 113},
    {name: 'Rexona', price: 8, id: 114},
    {name: 'Napkin', price: 5 , id: 115},
    {name: 'Diaper', price: 10, id: 116},
    {name: 'Katol', price: '₱25 per box', each: '₱5 each pair', id: 117, withPeso: true},
    {name: 'Lighter', price: 15, id: 118},
    {name: 'Posporo', price: 3, id: 119},
    {name: 'Battery big', price: 24, id: 120},
    {name: 'Battery small', price: 26, id: 121},
    {name: 'Gillete shaver', price: 20, id: 122},
  ]

  const [items, setItems] = useState(data)

  const handleFilter = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredItems = data.filter(item => item.name.toLocaleLowerCase().includes(search))
    setItems(filteredItems)
  }

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
                onChange={(e) => handleFilter(e)}
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='px-2 mt-4 mb-4'>
        {items.map(item => {
          return (
            <div key={item.id} className="item shadow p-3 mb-3 bg-body rounded">
            <p className='fw-bold text-uppercase'>{item.name}</p>
            <div className='d-flex justify-content-between'>
              <p className='mb-0'>{item.withPeso ? item.price : `₱${item.price}`}</p>
              <p className='mb-0'>{item.each ? `${item.each}` : '' }</p>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
