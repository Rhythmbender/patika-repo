// Prompt kullanılarak; girdiğimiz ismi ekrana basacak.
let whatIsYourName = prompt("Lütfen isminizi girin:");
document.querySelector("#myName").innerHTML = `${whatIsYourName}`;

//  Şu anki saati ve günü gösteren bir ekran için saat uygulaması:
function showTime() {

    var now = new Date();

    // Saat için;
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    // Gün bilgisi için;
    // getDay fonksiyonu: 0.index Pazar referans alınır.
    var day = now.getDay();
    var days = ["Pazar", "Pazartesi", "Sali", "Carsamba", "Persembe", "Cuma", "Cumartesi"];

    // 16:1:58 gibi durumda tek basamaklı olmasın diye ekstra özellik;
    // 16:01:58 gösterecek artık.
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    document.querySelector("#myClock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + days[day];
}
// "setInterval" fonksiyonu her saniye güncel tarih ve saati ekranda gösterir.
setInterval(showTime, 1000);