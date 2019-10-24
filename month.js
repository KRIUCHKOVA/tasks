const month = ['Feb', 'Apr', 'May', 'Dec', 'March', 'Aug']

function getSeasonMonth (season) {
    if (season === 'Winter') {
        return ['Dec', 'Jan', 'Feb']
    }

    if (season === 'Spring') {
        return ['March', 'Apr', 'May']
    }

    if (season === 'Summer') {
        return ['Jun', 'Jul', 'Aug']
    }

    if (season === 'Autumn') {
        return ['Sep', 'Oct', 'Nov']
    }

    return null
}

function getSeason(){
    const seasonMonths = getSeasonMonth('Winter');
    const a = seasonMonths.reduce((filtered, option) => {
        if(month.includes(option)){
          filtered.push(option);  
        }
        return filtered;
    },[]) 
    console.log(a);
}

getSeason();