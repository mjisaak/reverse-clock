



countDownDate = new Date()

chrome.storage.sync.get(['key'], function (result) {
    console.log('Value currently is ' + result.key);
    document.getElementById('rc_date').value = result.key

    // Set the date we're counting down to
    countDownDate = new Date(result.key)
    // M: 78,9 F: 83,6
    countDownDate.setFullYear(countDownDate.getFullYear() + 80)
    console.log("this is it", countDownDate)

    countDownDate = countDownDate.getTime();
    setReverseClock()


});
function saveSettings() {
    // chrome.storage.sync.set({ key: value }, function () {
    //   console.log('Value is set to ' + value);
    // });
    chrome.storage.sync.set({ key: document.getElementById('rc_date').value }, function () {

    });


    // window.close();
}

//An Alarm delay of less than the minimum 1 minute will fire
// in approximately 1 minute incriments if released
document.getElementById('saveSettings').addEventListener('click', saveSettings);

// document.getElementById("close-dialog").addEventListener("click", () => {
//     dialog.close();
// });

document.getElementById("show-dialog").addEventListener("click", () => {
    dialog.showModal();
    return false;
});


// Update the count down every 1 second
var x = setInterval(setReverseClock, 1000);


function setReverseClock() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var days = Math.floor(distance % (1000 * 60 * 60 * 24) * 365 / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("rc_years").innerHTML = years;
    document.getElementById("rc_days").innerHTML = days;
    document.getElementById("rc_hours").innerHTML = hours;
    document.getElementById("rc_minutes").innerHTML = minutes;
    document.getElementById("rc_seconds").innerHTML = seconds;



    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}