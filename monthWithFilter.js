matchSeason(['March', 'Jul', 'Nov'], 'Spring');

function matchSeason(arr, nameSeason) {

  switch (nameSeason) {
    case 'Winter': 
     season = ['Dec', 'Jan', 'Feb'];
      break;
    
    case 'Spring': 
     season = ['March', 'Apr', 'May'];
      break;   
    
    case 'Summer': 
     season = ['Jun', 'Jul', 'Aug'];
      break;  
    
    default: 
     season = ['Sep', 'Oct', 'Nov'];  
  }
  console.log(season.filter (month => arr.includes(month)));
}
