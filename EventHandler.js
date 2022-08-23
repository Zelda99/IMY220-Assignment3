// Zelda Wiese _ u18191135

// Constructor for an object in JavaScript
function EventHandler(events)
{
	this.events = events;
}
// vars values to test in console
var start = "2022/02/01";
var end = "2022/02/16";

// four member functions below

// member function 1
EventHandler.prototype.getEventsBetweenDates = function(start, end)
{
    // vars to get start and end date
    var dateStart = this.events.dateStart;
    console.log(dateStart);
    var dateEnd = [];
    // vars to get info of events
    var name = [];
    var description = [];
    // var to get dates between start and end date
    var dateBetween = [];
    // if statement to get events between dates
    if ((dateStart >= start) && (dateEnd <= end))
    {
        events.forEach(element => {
            dateBetween.push(this.events[name + description + dateStart + dateEnd ]);
            console.log(dateBetween);
        });
        
    }
    


}

// // member function 2
// EventHandler.prototype.getByMonth(month)
// {

// }

// // member function 3
// EventHandler.prototype.getUniqueDateAndSort()
// {

// }

// // member function 4
// EventHandler.prototype.getSummary()
// {

// }