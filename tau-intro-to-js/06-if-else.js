let attendance = 15

function isFullCapacity(attendance) {
    // We can have inner functions in JS as well
    const printAttendance = function () {
        console.log("You entered capacity as: " + attendance)
    }

    printAttendance()
    // === means absolutely equals
    if (attendance < 15) {
        console.log("We have room")
    }
    // We only execute this if the first condition failed
    else if (attendance > 15) {
        console.log("We are over capacity")
    }
    else {
        console.log("We are at capacity")
    }
}

isFullCapacity(13)
isFullCapacity(16)
isFullCapacity(15)