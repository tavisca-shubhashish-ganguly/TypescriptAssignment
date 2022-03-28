enum TripType{
    OneWay,
    RoundTrip,
    BusinessClass,
    NonRefundable
}

function tripTypeSelected(e: TripType){
    console.log("TripType selected as "+ TripType[e])
}


tripTypeSelected(TripType.BusinessClass)