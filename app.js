function qdocument(data) {
    return document.querySelector(data)
}

function digCal (value , current){
    return ( 360 * value ) / current;
}



setInterval(() => {
    let date = new Date();

    let secend = date.getSeconds() * 6;
    let munit = date.getMinutes() * 6;
    let hours = (date.getHours() * 30) + (munit / 12);
    let huda = date.getMilliseconds() / 2.8;

    qdocument('.s').style.transform = `rotate(${secend}deg)`
    qdocument('.m').style.transform = `rotate(${munit}deg)`
    qdocument('.h').style.transform = `rotate(${hours}deg)`
    qdocument('.huda').style.transform = `rotate(${huda}deg)`
})