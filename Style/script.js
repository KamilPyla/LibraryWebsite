// funkcja szukająca 

function search() {
    var str = document.getElementById("phrase").value;
    str = "<h1>" + str + "<h1/>";
    document.getElementById("List").innerHTML = str;
}

function city(tab) {
    s = "";
    for (i = 0; i < tab.length; i++)
        s = s + '<option value="' + tab[i] + '">' + tab[i] + '</option>';
    return s;

}

function pushMenu() {
    s = '<ul><li class="current"><a href="index.html">Strona Główna</a></li><li><a href="article.html">Artykuł</a></li><li><a href="contact.html">Kontakt</a></li><li><a href="registration.html" title="Zarejestruj się!" target="_blank">Rejestracja</a></li><li><a href="books.html">Nasze książki</a></li></ul><div style="clear: both;"></div>';
    s = 'blablabla';
    document.getElementsByClassName("menu").innerHTML = s;
}



function prov() {

    var w = document.getElementById("province").value;

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

function checkPassword() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var text = document.getElementById("checkPass");

    if (pass1 != pass2) {
        text.style.color = 'red';
        text.innerHTML = "Hasła nie są takie same";
    } else {
        text.innerHTML = "Hasła są takie same";
        text.style.color = "#3bb660";
    }
}

function checkPostCode() {
    var code = document.getElementById("postCode").value;
    if (code[2] != '-' || code.length != 6)
        alert("wpisz właściwy kod pocztowy!")
}

function send() {

    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var rule = document.getElementById("regulation");
    var mark = document.getElementById("marketing");
    checkPostCode();

    if (pass1 == "")
        alert("Wpisz hasło!");
    else if (pass1 != pass2)
        alert("Hasła nie są takie same!!!");
    else if (rule.checked != true)
        alert("Wymagana zgoda regulaminu");
    else if (mark.checked != true) {
        if (confirm("Czy jesteś pewien, że nie chcesz otrzymywać materiałów marketingowych?")) {
            alert("Formularz został wysłany!")
        }
    } else {
        alert("Formularz został wysłany!")
    }
}