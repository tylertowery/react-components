// TODO
const GroceryList = () => {
  return (
    <div>
      <h2>My Grocery List</h2>
      <List list={['milk', 'eggs', 'cheese', 'wine', 'bread']}/>
    </div>
  )
}

const { useState } = React;

const ListItem = props => {
  const [isBold, setBold] = useState(false)
  const [isGreen, setColor] = useState(false)

  const style = {
    fontWeight: isBold ? 'bold' : 'normal',
    color: isGreen ? 'green' : 'black'
  }

  return (
    <li style={style} onMouseEnter={() => setBold(true)} onMouseLeave={() => setBold(false)} onClick={() => setColor(!isGreen)}>
      {props.list}
    </li>
  )
}

const List = props => {

  const onListItemClick = (event) => {
    console.log(event.target.innerHTML + ' got clicked!');
  }

  return (
    <ul onClick={onListItemClick}>
      {props.list.map((list) => (
        <ListItem list={list} />
      ))}
    </ul>
  )
}


ReactDOM.render(<GroceryList />, document.getElementById("app"));