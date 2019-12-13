(function() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    var message;

    if(currentHour >= 5 && currentHour < 12) {
        message = "Bom dia!";
    } else if (currentHour >= 12 && currentHour < 18) {
        message = "Boa tarde!";
    } else if (currentHour >= 18 && currentHour <= 23) {
        message = "Boa tarde!";
    } else {
        message = "Boa madrugada!";
    }

    alert(message);
})();