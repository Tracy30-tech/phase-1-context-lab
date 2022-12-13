/* Your Code Here */
function createEmployeeRecord(array) {
    let newObj = {}

    newObj.firstName = array[0]
    newObj.familyName = array[1]
    newObj.title = array[2]
    newObj.payPerHour = array[3]
    newObj.timeInEvents = []
    newObj.timeOutEvents = []

    return newObj
}

function createEmployeeRecords(aOfArrays) {
    let  records = aOfArrays.map(createEmployeeRecord)
   
    return records
}

const createTimeInEvent = function (dateStamp) {
    let date = dateStamp.split(" ")
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(date[1]),
        date: date[0]
    }

    this.timeInEvents.push(timeIn)

    return this
}

const createTimeOutEvent = function (dateStamp) {
    let date = dateStamp.split(" ")
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(date[1]),
        date: date[0]
    }

    this.timeOutEvents.push(timeOut)

    return this
}

const hoursWorkedOnDate = function (dateForm) {

    //Finds exact time checked in and out using the array find function
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === dateForm)
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === dateForm)

    //return clocked out time minus clocked in time to get amount of hours worked. Divide by 100 since on 24 hour system.

    return (outEvent.hour - inEvent.hour) / 100

}

const wagesEarnedOnDate = function (dateForm) {
    //return simple calculation of pay per hour times hours worked.
    return hoursWorkedOnDate.call(this, dateForm) * this.payPerHour
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) 
    return payable
}

const findEmployeeByFirstName = function (srcArray, firstName) { 
       return srcArray.find(rec => rec.firstName === firstName) 
 
} 
 

 
const calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor.call(rec)
    }, 0)
}




















