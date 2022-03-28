var TripType;
(function (TripType) {
    TripType[TripType["OneWay"] = 0] = "OneWay";
    TripType[TripType["RoundTrip"] = 1] = "RoundTrip";
    TripType[TripType["BusinessClass"] = 2] = "BusinessClass";
    TripType[TripType["NonRefundable"] = 3] = "NonRefundable";
})(TripType || (TripType = {}));
function tripTypeSelected(e) {
    console.log("TripType selected as " + TripType[e]);
}
tripTypeSelected(TripType.BusinessClass);
