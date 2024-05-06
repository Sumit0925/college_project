function currentTime() {

    const today = new Date();
    let hrs = today.getHours();
    let greet = "";
    let day = today.getDay();
    const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    let month = today.toLocaleString('default', { month: "long" });
    let date = today.getDate();
    let year = today.getFullYear();
    let time = today.toLocaleTimeString();

    if (hrs < 12) {
        greet = "Good Morning!";
    }
    else if (hrs >= 12 && hrs < 17) {
        greet = "Good Afternoon!";
    }
    else if (hrs >= 17 && hrs < 24) {
        greet = "Good Evening!";
    }
    document.querySelector(".greeting-text").innerHTML = greet;
    document.querySelector(".day-text").innerHTML = dayList[day];
    document.querySelector(".date-text").innerHTML = `${month} ${date}, ${year}, ${time}`;

}
setInterval(currentTime, 1000);
