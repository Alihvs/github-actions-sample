const dayOfTheWeek = (date = new Date()) => {

    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wenesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    return days[date.getDay()];
}

try {
    const element = document.getElementById('day');
    if (element) element.innerText = dayOfTheWeek();
} catch(err) {
    console.log(err);
}

exports.dayOfTheWeek = dayOfTheWeek;