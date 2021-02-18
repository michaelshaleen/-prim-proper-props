import App from '../App/App'

function DinnerSupplies({guestList}) {
  console.log("dinner supplies", guestList.length)
  return(
    
   <h2>Dinner Supplies</h2>,
     <ul><li>
     Spoons: {guestList.length * 2}
     </li>
    <li>
     Forks: {guestList.length * 2}
    </li>
    <li>
     Knives: {guestList.length * 2}
     </li>
    </ul>
    
    );
}


export default DinnerSupplies;