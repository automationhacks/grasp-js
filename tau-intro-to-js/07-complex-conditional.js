const car = {
    "color": "red",
    "price": 999,
    "numDoors": 2
}

if ((car.color === "red" && car.price> 1000) || car.numDoors > 4) {
    console.log("We'll take it")
}
else {
    console.log("Welp, Its best if we keep looking")
}