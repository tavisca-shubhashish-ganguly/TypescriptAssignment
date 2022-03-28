function myFullName(name, lastName, lastName1) {
    if (lastName1) {
        console.log(name + " " + lastName + " " + lastName1);
    }
    else {
        console.log(name + " " + lastName);
    }
}
myFullName("Shubhashish", "Ganguly");
myFullName("Subhash", "Chandra", "Bose");
