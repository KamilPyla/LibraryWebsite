// funkcja szukająca 

function search() {
    var str = document.getElementById("phrase").value;
    str = "<h1>" + str + "<h1/>";
    document.getElementById("List").innerHTML = str;
}

function city(tab) {
    s = "";
    for (i = 0; i < tab.length; i++)
        s = s + '<option>' + tab[i] + '</option>';
    return s;

}



function woje() {

    var w = document.getElementById("woj").value;

    if (w == 1) {

        const citysDS = ["Bardo", "Bielawa", "Bierutów", "Bogatynia", "Boguszów-Gorce", "Bolesławiec", "Bolków", "Brzeg Dolny", "Bystrzyca Kłodzka", "Chocianów", "Chojnów", "Duszniki-Zdrój", "Dzierżoniów", "Głogów", "Głuszyca", "Góra (województwo dolnośląskie)", "Gryfów Śląski", "Jawor (miasto)", "Jaworzyna Śląska", "Jedlina-Zdrój", "Jelcz-Laskowice", "Jelenia Góra", "Kamieniec Ząbkowicki", "Kamienna Góra", "Karpacz", "Kąty Wrocławskie", "Kłodzko", "Kowary", "Kudowa-Zdrój", "Lądek-Zdrój", "Legnica", "Leśna", "Lubań (województwo dolnośląskie)", "Lubawka", "Lubin", "Lubomierz", "Lwówek Śląski", "Mieroszów", "Międzybórz", "Międzylesie", "Milicz", "Mirsk", "Niemcza", "Nowa Ruda", "Nowogrodziec", "Oborniki Śląskie", "Oleśnica", "Olszyna", "Oława", "Piechowice", "Pieńsk", "Pieszyce", "Piława Górna", "Polanica-Zdrój", "Polkowice", "Prochowice", "Prusice", "Przemków", "Radków", "Siechnice", "Sobótka (powiat wrocławski)", "Stronie Śląskie", "Strzegom", "Strzelin", "Syców", "Szczawno-Zdrój", "Szczytna", "Szklarska Poręba", "Ścinawa", "Środa Śląska", "Świdnica", "Świebodzice", "Świeradów-Zdrój", "Świerzawa", "Trzebnica", "Twardogóra", "Wałbrzych", "Wąsosz (województwo dolnośląskie)", "Węgliniec", "Wiązów", "Wleń", "Wojcieszów", "Wołów", "Wrocław", "Zawidów", "Ząbkowice Śląskie", "Zgorzelec", "Ziębice", "Złotoryja", "Złoty Stok", "Żarów", "Żmigród"];
        document.getElementById("city").innerHTML = city(citysDS);


    } else if (w == 2) {


        const citysKP = ["Aleksandrów Kujawski", "Barcin", "Brodnica", "Brześć Kujawski", "Bydgoszcz", "Chełmno", "Chełmża", "Chodecz", "Ciechocinek", "Dobrzyń nad Wisłą", "Gniewkowo", "Golub-Dobrzyń", "Górzno", "Grudziądz", "Inowrocław", "Izbica Kujawska", "Jabłonowo Pomorskie", "Janikowo", "Janowiec Wielkopolski", "Kamień Krajeński", "Kcynia", "Koronowo", "Kowal (miasto)", "Kowalewo Pomorskie", "Kruszwica", "Lipno", "Lubień Kujawski", "Lubraniec", "Łabiszyn", "Łasin", "Mogilno", "Mrocza", "Nakło nad Notecią", "Nieszawa", "Nowe", "Pakość", "Piotrków Kujawski", "Radziejów", "Radzyń Chełmiński", "Rypin", "Sępólno Krajeńskie", "Skępe", "Solec Kujawski", "Strzelno", "Szubin", "Świecie", "Toruń", "Tuchola", "Wąbrzeźno", "Więcbork", "Włocławek", "Żnin"];

        document.getElementById("city").innerHTML = city(citysKP);

    } else if (w == 3) {

        const citysLB = ["Annopol", "Bełżyce", "Biała Podlaska", "Biłgoraj", "Bychawa", "Chełm", "Dęblin", "Frampol", "Goraj", "Hrubieszów", "Janów Lubelski", "Józefów (powiat biłgorajski)", "Józefów nad Wisłą", "Kamionka (powiat lubartowski)", "Kazimierz Dolny", "Kock", "Krasnobród", "Krasnystaw", "Kraśnik", "Lubartów", "Lublin", "Lubycza Królewska", "Łaszczów", "Łęczna", "Łuków", "Międzyrzec Podlaski", "Modliborzyce", "Nałęczów", "Opole Lubelskie", "Ostrów Lubelski", "Parczew", "Piaski (powiat świdnicki)", "Poniatowa", "Puławy", "Radzyń Podlaski", "Rejowiec", "Rejowiec Fabryczny", "Ryki", "Siedliszcze", "Stoczek Łukowski", "Szczebrzeszyn", "Świdnik", "Tarnogród", "Terespol", "Tomaszów Lubelski", "Tyszowce", "Urzędów", "Włodawa", "Zamość", "Zwierzyniec (powiat zamojski)"];
        document.getElementById("city").innerHTML = city(citysLB);

    } else if (w == 4) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 5) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 6) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 7) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 8) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 9) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 10) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 11) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 12) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 13) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 14) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 15) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";

    } else if (w == 16) {
        document.getElementById("city").innerHTML = "<option>" + w + "</option>";
    }


}

function pass() {
    var pass1 = document.getElementById("pass").value;
    var pass2 = document.getElementById("passRep").value;
    if (pass1 == pass2)
        document.getElementById("correctPass").innerHTML = "hasła są takie same";
    else
        document.getElementById("correctPass").innerHTML = "hasła nie są identyczne.";
}