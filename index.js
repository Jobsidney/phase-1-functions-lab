// Code your solution in this file!


function distanceFromHqInBlocks(location){
    if (location>42) {
        return location-42;
        
    }else{
        return 42-location;
    }
}

function distanceFromHqInFeet(distance) {
       const length=distanceFromHqInBlocks(distance);
       return length*264;
}

function distanceTravelledInFeet(destination,depart){
    let distance;
    if (depart>destination) {
        distance=depart-destination;
        
    }else{
        distance=destination-depart;
    }
    return distance*264;


}
function calculatesFarePrice(start, destination) {
    let distance=distanceTravelledInFeet(destination,start);
    let cost;
    if(distance>400 && distance<2000){
        distance=distance-400;
        cost=distance*0.02;
    }else if(distance>2000 && distance<=2500){
        cost=25;
    }
    else if(distance<400){
        cost=0;
    }
    else{
        cost="cannot travel that far";
    }
    return cost;
    
}
calculatesFarePrice()