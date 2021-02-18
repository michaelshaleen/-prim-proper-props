import App from '../App/App'



function DinnerSupplies() {
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
// guestList is not producing numbers!! why
//guestList undefined object
  // idk why commas are needed to prevent
  // syntax errors within return 
  // using <ul><li> instead

export default DinnerSupplies;