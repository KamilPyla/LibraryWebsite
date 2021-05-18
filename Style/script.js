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

function pushMenu(name) {
    s = '<ul><li id="homePage"><a href="index.html">Strona Główna</a></li><li id="article"><a href="article.html">Artykuł</a></li><li id="contact"><a href="contact.html">Kontakt</a></li><li id="registration"><a href="registration.html" title="Zarejestruj się!">Rejestracja</a></li><li id="books"><a href="books.html">Nasze książki</a></li></ul><div style="clear: both;"></div>';

    // $('#menu').load('../Pages/menu.html');

    document.getElementById("menu").innerHTML = s;

    document.getElementById(name).className = 'current';
}



function prov() {

    var w = document.getElementById("province").value;

    switch (w) {
        case '1':
            {
                const citysDS = ["Bardo", "Bielawa", "Bierutów", "Bogatynia", "Boguszów-Gorce", "Bolesławiec", "Bolków", "Brzeg Dolny", "Bystrzyca Kłodzka", "Chocianów", "Chojnów", "Duszniki-Zdrój", "Dzierżoniów", "Głogów", "Głuszyca", "Góra (województwo dolnośląskie)", "Gryfów Śląski", "Jawor (miasto)", "Jaworzyna Śląska", "Jedlina-Zdrój", "Jelcz-Laskowice", "Jelenia Góra", "Kamieniec Ząbkowicki", "Kamienna Góra", "Karpacz", "Kąty Wrocławskie", "Kłodzko", "Kowary", "Kudowa-Zdrój", "Lądek-Zdrój", "Legnica", "Leśna", "Lubań (województwo dolnośląskie)", "Lubawka", "Lubin", "Lubomierz", "Lwówek Śląski", "Mieroszów", "Międzybórz", "Międzylesie", "Milicz", "Mirsk", "Niemcza", "Nowa Ruda", "Nowogrodziec", "Oborniki Śląskie", "Oleśnica", "Olszyna", "Oława", "Piechowice", "Pieńsk", "Pieszyce", "Piława Górna", "Polanica-Zdrój", "Polkowice", "Prochowice", "Prusice", "Przemków", "Radków", "Siechnice", "Sobótka (powiat wrocławski)", "Stronie Śląskie", "Strzegom", "Strzelin", "Syców", "Szczawno-Zdrój", "Szczytna", "Szklarska Poręba", "Ścinawa", "Środa Śląska", "Świdnica", "Świebodzice", "Świeradów-Zdrój", "Świerzawa", "Trzebnica", "Twardogóra", "Wałbrzych", "Wąsosz (województwo dolnośląskie)", "Węgliniec", "Wiązów", "Wleń", "Wojcieszów", "Wołów", "Wrocław", "Zawidów", "Ząbkowice Śląskie", "Zgorzelec", "Ziębice", "Złotoryja", "Złoty Stok", "Żarów", "Żmigród"];
                document.getElementById("city").innerHTML = city(citysDS);
            }
            break;
        case '2':
            {
                const citysKP = ["Aleksandrów Kujawski", "Barcin", "Brodnica", "Brześć Kujawski", "Bydgoszcz", "Chełmno", "Chełmża", "Chodecz", "Ciechocinek", "Dobrzyń nad Wisłą", "Gniewkowo", "Golub-Dobrzyń", "Górzno", "Grudziądz", "Inowrocław", "Izbica Kujawska", "Jabłonowo Pomorskie", "Janikowo", "Janowiec Wielkopolski", "Kamień Krajeński", "Kcynia", "Koronowo", "Kowal (miasto)", "Kowalewo Pomorskie", "Kruszwica", "Lipno", "Lubień Kujawski", "Lubraniec", "Łabiszyn", "Łasin", "Mogilno", "Mrocza", "Nakło nad Notecią", "Nieszawa", "Nowe", "Pakość", "Piotrków Kujawski", "Radziejów", "Radzyń Chełmiński", "Rypin", "Sępólno Krajeńskie", "Skępe", "Solec Kujawski", "Strzelno", "Szubin", "Świecie", "Toruń", "Tuchola", "Wąbrzeźno", "Więcbork", "Włocławek", "Żnin"];
                document.getElementById("city").innerHTML = city(citysKP);
            }
            break;
        case '3':
            {
                const citysLS = ["Annopol", "Bełżyce", "Biała Podlaska", "Biłgoraj", "Bychawa", "Chełm", "Dęblin", "Frampol", "Goraj", "Hrubieszów", "Janów Lubelski", "Józefów (powiat biłgorajski)", "Józefów nad Wisłą", "Kamionka (powiat lubartowski)", "Kazimierz Dolny", "Kock", "Krasnobród", "Krasnystaw", "Kraśnik", "Lubartów", "Lublin", "Lubycza Królewska", "Łaszczów", "Łęczna", "Łuków", "Międzyrzec Podlaski", "Modliborzyce", "Nałęczów", "Opole Lubelskie", "Ostrów Lubelski", "Parczew", "Piaski (powiat świdnicki)", "Poniatowa", "Puławy", "Radzyń Podlaski", "Rejowiec", "Rejowiec Fabryczny", "Ryki", "Siedliszcze", "Stoczek Łukowski", "Szczebrzeszyn", "Świdnik", "Tarnogród", "Terespol", "Tomaszów Lubelski", "Tyszowce", "Urzędów", "Włodawa", "Zamość", "Zwierzyniec (powiat zamojski)"];
                document.getElementById("city").innerHTML = city(citysLS);
            }
            break;
        case '4':
            {
                const citysLB = ["Babimost", "Bytom Odrzański", "Cybinka", "Czerwieńsk", "Dobiegniew", "Drezdenko", "Gorzów Wielkopolski", "Gozdnica", "Gubin", "Iłowa", "Jasień (województwo lubuskie)", "Kargowa", "Kostrzyn nad Odrą", "Kożuchów", "Krosno Odrzańskie", "Lubniewice", "Lubsko", "Łęknica", "Małomice", "Międzyrzecz", "Nowa Sól", "Nowe Miasteczko", "Nowogród Bobrzański", "Ośno Lubuskie", "Otyń", "Rzepin", "Skwierzyna", "Sława (miasto)", "Słubice", "Strzelce Krajeńskie", "Sulechów", "Sulęcin", "Szlichtyngowa", "Szprotawa", "Świebodzin", "Torzym", "Trzciel", "Witnica", "Wschowa", "Zbąszynek", "Zielona Góra", "Żagań", "Żary"];
                document.getElementById("city").innerHTML = city(citysLB);
            }
            break;
        case '5':
            {
                const citysLD = ["Aleksandrów Łódzki", "Bełchatów", "Biała Rawska", "Błaszki", "Brzeziny", "Drzewica (województwo łódzkie)", "Działoszyn", "Głowno", "Kamieńsk", "Koluszki", "Konstantynów Łódzki", "Krośniewice", "Kutno", "Lututów", "Łask", "Łęczyca", "Łowicz", "Łódź", "Opoczno", "Ozorków", "Pabianice", "Pajęczno", "Piątek (miasto)", "Piotrków Trybunalski", "Poddębice", "Przedbórz", "Radomsko", "Rawa Mazowiecka", "Rzgów", "Sieradz", "Skierniewice", "Stryków", "Sulejów", "Szadek", "Tomaszów Mazowiecki", "Tuszyn", "Uniejów", "Warta (miasto)", "Wieluń", "Wieruszów", "Wolbórz", "Zduńska Wola", "Zelów", "Zgierz", "Złoczew", "Żychlin"];
                document.getElementById("city").innerHTML = city(citysLD);
            }
            break;
        case '6':
            {
                const citysMP = ["Alwernia", "Andrychów", "Biecz", "Bobowa", "Bochnia", "Brzesko", "Brzeszcze", "Bukowno", "Chełmek", "Chrzanów", "Ciężkowice", "Czchów", "Dąbrowa Tarnowska", "Dobczyce", "Gorlice", "Grybów", "Jordanów", "Kalwaria Zebrzydowska", "Kęty", "Koszyce (województwo małopolskie)", "Kraków", "Krynica-Zdrój", "Krzeszowice", "Libiąż", "Limanowa", "Maków Podhalański", "Miechów", "Mszana Dolna", "Muszyna", "Myślenice", "Niepołomice", "Nowe Brzesko", "Nowy Sącz", "Nowy Targ", "Nowy Wiśnicz", "Olkusz", "Oświęcim", "Piwniczna-Zdrój", "Proszowice", "Rabka-Zdrój", "Radłów", "Ryglice", "Skała (województwo małopolskie)", "Skawina", "Słomniki", "Stary Sącz", "Sucha Beskidzka", "Sułkowice", "Szczawnica", "Szczucin", "Świątniki Górne", "Tarnów", "Trzebinia", "Tuchów", "Wadowice", "Wieliczka", "Wojnicz", "Wolbrom", "Zakliczyn", "Zakopane", "Zator (województwo małopolskie)", "Żabno"];
                document.getElementById("city").innerHTML = city(citysMP);
            }
            break;
        case '7':
            {
                const citysMZ = ["Białobrzegi", "Bieżuń", "Błonie", "Brok", "Brwinów", "Chorzele", "Ciechanów", "Czerwińsk nad Wisłą", "Drobin", "Garwolin", "Gąbin", "Glinojeck", "Gostynin", "Góra Kalwaria", "Grodzisk Mazowiecki", "Grójec", "Halinów", "Iłża", "Józefów (powiat otwocki)", "Kałuszyn", "Karczew", "Kobyłka", "Konstancin-Jeziorna", "Kosów Lacki", "Kozienice", "Legionowo", "Lipsko", "Lubowidz", "Łaskarzew", "Łochów", "Łomianki", "Łosice", "Maków Mazowiecki", "Marki", "Milanówek", "Mińsk Mazowiecki", "Mława", "Mogielnica", "Mordy", "Mrozy", "Mszczonów", "Myszyniec", "Nasielsk", "Nowe Miasto nad Pilicą", "Nowy Dwór Mazowiecki", "Ostrołęka", "Ostrów Mazowiecka", "Otwock", "Ożarów Mazowiecki", "Piaseczno", "Piastów", "Pilawa (powiat garwoliński)", "Pionki", "Płock", "Płońsk", "Podkowa Leśna", "Pruszków", "Przasnysz", "Przysucha", "Pułtusk", "Raciąż", "Radom", "Radzymin", "Różan", "Sanniki", "Serock", "Siedlce", "Sierpc", "Skaryszew", "Sochaczew", "Sochocin", "Sokołów Podlaski", "Solec nad Wisłą", "Sulejówek", "Szydłowiec", "Tarczyn", "Tłuszcz (powiat wołomiński)", "Warka", "Warszawa", "Węgrów", "Wiskitki", "Wołomin", "Wyszków", "Wyszogród (województwo mazowieckie)", "Wyśmierzyce", "Zakroczym", "Ząbki", "Zielonka (powiat wołomiński)", "Zwoleń (powiat zwoleński)", "Żelechów", "Żuromin", "Żyrardów"];
                document.getElementById("city").innerHTML = city(citysMZ);
            }
        case '8':
            {
                const citysOP = ["Baborów", "Biała (miasto)", "Brzeg (miasto)", "Byczyna", "Dobrodzień", "Głogówek", "Głubczyce", "Głuchołazy", "Gogolin", "Gorzów Śląski", "Grodków", "Kędzierzyn-Koźle", "Kietrz", "Kluczbork", "Kolonowskie", "Korfantów", "Krapkowice", "Leśnica (województwo opolskie)", "Lewin Brzeski", "Namysłów", "Niemodlin", "Nysa", "Olesno", "Opole", "Otmuchów", "Ozimek", "Paczków", "Praszka", "Prószków", "Prudnik", "Strzelce Opolskie", "Tułowice", "Ujazd", "Wołczyn", "Zawadzkie", "Zdzieszowic"];
                document.getElementById("city").innerHTML = city(citysOP);
            }
            break;
        case '9':
            {
                const citysPK = ["Baranów Sandomierski", "Błażowa", "Boguchwała", "Brzostek", "Brzozów", "Cieszanów", "Dębica", "Dubiecko", "Dukla", "Dynów", "Głogów Małopolski", "Iwonicz-Zdrój", "Jarosław (województwo podkarpackie)", "Jasło", "Jedlicze", "Kańczuga", "Kolbuszowa", "Kołaczyce", "Krosno", "Lesko", "Leżajsk", "Lubaczów", "Łańcut", "Mielec", "Narol", "Nisko", "Nowa Dęba", "Nowa Sarzyna", "Oleszyce", "Pilzno (Polska)", "Pruchnik", "Przecław", "Przemyśl", "Przeworsk", "Radomyśl Wielki", "Radymno", "Ropczyce", "Rudnik nad Sanem", "Rymanów", "Rzeszów", "Sanok", "Sędziszów Małopolski", "Sieniawa", "Sokołów Małopolski", "Stalowa Wola", "Strzyżów", "Tarnobrzeg", "Tyczyn", "Ulanów", "Ustrzyki Dolne", "Zagórz", "Zaklików"];
                document.getElementById("city").innerHTML = city(citysPK);
            }
            break;
        case '10':
            {
                const citysPD = ["Augustów", "Białystok", "Bielsk Podlaski", "Brańsk", "Choroszcz", "Ciechanowiec", "Czarna Białostocka", "Czyżew", "Dąbrowa Białostocka", "Drohiczyn (Polska)", "Goniądz", "Grajewo", "Hajnówka", "Jedwabne", "Kleszczele", "Knyszyn", "Kolno", "Krynki", "Lipsk (powiat augustowski)", "Łapy", "Łomża", "Michałowo", "Mońki", "Nowogród", "Rajgród", "Sejny", "Siemiatycze", "Sokółka", "Stawiski", "Suchowola", "Supraśl", "Suraż", "Suwałki", "Szczuczyn (województwo podlaskie)", "Szepietowo", "Tykocin", "Wasilków", "Wysokie Mazowieckie", "Zabłudów", "Zambrów"];
                document.getElementById("city").innerHTML = city(citysPD);
            }
            break;
        case '11':
            {
                const citysPM = ["Brusy", "Bytów", "Chojnice", "Czarna Woda (miasto)", "Czarne", "Czersk", "Człuchów", "Debrzno", "Dzierzgoń", "Gdańsk", "Gdynia", "Gniew (miasto)", "Hel (miasto)", "Jastarnia", "Kartuzy", "Kępice", "Kościerzyna", "Krynica Morska", "Kwidzyn", "Lębork", "Łeba", "Malbork", "Miastko", "Nowy Dwór Gdański", "Nowy Staw", "Pelplin", "Prabuty", "Pruszcz Gdański", "Puck", "Reda (miasto)", "Rumia", "Skarszewy", "Skórcz", "Słupsk", "Sopot", "Starogard Gdański", "Sztum", "Tczew", "Ustka", "Wejherowo", "Władysławowo", "Żukow"];
                document.getElementById("city").innerHTML = city(citysPM);
            }
            break;
        case '12':
            {
                const citysSL = ["Będzin", "Bielsko-Biała", "Bieruń", "Blachownia", "Bytom", "Chorzów", "Cieszyn", "Czechowice-Dziedzice", "Czeladź (miasto)", "Czerwionka-Leszczyny", "Częstochowa", "Dąbrowa Górnicza", "Gliwice", "Imielin", "Jastrzębie-Zdrój", "Jaworzno", "Kalety", "Katowice", "Kłobuck", "Knurów", "Koniecpol", "Koziegłowy (województwo śląskie)", "Krzanowice", "Krzepice", "Kuźnia Raciborska", "Lędziny", "Lubliniec", "Łaziska Górne", "Łazy", "Miasteczko Śląskie", "Mikołów", "Mysłowice", "Myszków", "Ogrodzieniec", "Orzesze", "Piekary Śląskie", "Pilica (województwo śląskie)", "Poręba", "Pszczyna", "Pszów", "Pyskowice", "Racibórz", "Radlin", "Radzionków", "Ruda Śląska", "Rybnik", "Rydułtowy", "Siemianowice Śląskie", "Siewierz", "Skoczów", "Sławków (województwo śląskie)", "Sosnowiec", "Sośnicowice", "Strumień (miasto)", "Szczekociny", "Szczyrk", "Świętochłowice", "Tarnowskie Góry", "Toszek", "Tychy", "Ustroń", "Wilamowice", "Wisła (miasto)", "Wodzisław Śląski", "Wojkowice", "Woźniki", "Zabrze", "Zawiercie", "Żarki", "Żory", "Żywie"];
                document.getElementById("city").innerHTML = city(citysSL);
            }
            break;
        case '13':
            {
                const citysSW = ["Bodzentyn", "Busko-Zdrój", "Chęciny", "Chmielnik (województwo świętokrzyskie)", "Ćmielów", "Daleszyce", "Działoszyce", "Jędrzejów", "Kazimierza Wielka", "Kielce", "Klimontów", "Końskie", "Koprzywnica", "Kunów", "Łagów", "Małogoszcz", "Morawica", "Nowa Słupia", "Nowy Korczyn", "Oleśnica (województwo świętokrzyskie)", "Opatowiec", "Opatów", "Osiek (województwo świętokrzyskie)", "Ostrowiec Świętokrzyski", "Ożarów", "Pacanów", "Pierzchnica", "Pińczów", "Połaniec", "Radoszyce", "Sandomierz", "Sędziszów", "Skalbmierz", "Skarżysko-Kamienna", "Starachowice", "Staszów", "Stąporków", "Stopnica", "Suchedniów", "Szydłów", "Wąchock", "Wiślica", "Włoszczowa", "Wodzisław", "Zawichos"];
                document.getElementById("city").innerHTML = city(citysSW);
            }
            break;
        case '14':
            {
                const citysWM = ["Barczewo", "Bartoszyce", "Biała Piska", "Biskupiec", "Bisztynek", "Braniewo", "Dobre Miasto", "Działdowo", "Elbląg", "Ełk", "Frombork", "Giżycko", "Gołdap", "Górowo Iławeckie", "Iława", "Jeziorany", "Kętrzyn", "Kisielice", "Korsze", "Lidzbark", "Lidzbark Warmiński", "Lubawa", "Mikołajki", "Miłakowo", "Miłomłyn", "Młynary", "Morąg", "Mrągowo", "Nidzica", "Olecko", "Olsztyn", "Olsztynek", "Orneta", "Orzysz", "Ostróda", "Pasłęk", "Pasym", "Pieniężno", "Pisz", "Reszel", "Ruciane-Nida", "Ryn", "Sępopol", "Susz", "Szczytno", "Tolkmicko", "Węgorzewo", "Wielbark", "Zalewo"];
                document.getElementById("city").innerHTML = city(citysWM);
            }
            break;
        case '15':
            {
                const citysWP = ["Bojanowo", "Borek Wielkopolski", "Budzyń", "Buk (województwo wielkopolskie)", "Chocz", "Chodzież", "Czarnków", "Czempiń", "Czerniejewo", "Dąbie", "Dobra (powiat turecki)", "Dobrzyca", "Dolsk", "Gniezno", "Golina", "Gołańcz", "Gostyń", "Grabów nad Prosną", "Jaraczewo", "Jarocin", "Jastrowie", "Jutrosin", "Kalisz", "Kępno", "Kleczew", "Kłecko", "Kłodawa", "Kobylin", "Koło (miasto)", "Konin", "Kostrzyn", "Kościan", "Koźmin Wielkopolski", "Koźminek", "Kórnik", "Krajenka", "Krobia", "Krotoszyn", "Krzywiń", "Krzyż Wielkopolski", "Książ Wielkopolski", "Leszno", "Luboń", "Lwówek", "Łobżenica", "Margonin", "Miejska Górka", "Międzychód", "Mikstat", "Miłosław", "Mosina", "Murowana Goślina", "Nekla", "Nowe Skalmierzyce", "Nowy Tomyśl", "Oborniki", "Obrzycko", "Odolanów", "Okonek", "Opalenica", "Opatówek", "Osieczna", "Ostroróg", "Ostrów Wielkopolski", "Ostrzeszów", "Piła (miasto)", "Pleszew", "Pniewy", "Pobiedziska", "Pogorzela", "Poniec", "Poznań", "Przedecz", "Puszczykowo", "Pyzdry", "Rakoniewice", "Raszków", "Rawicz", "Rogoźno", "Rychwał", "Rydzyna", "Sieraków", "Skoki (powiat wągrowiecki)", "Słupca", "Sompolno", "Stawiszyn", "Stęszew", "Sulmierzyce", "Swarzędz", "Szamocin", "Szamotuły", "Ślesin", "Śmigiel", "Śrem", "Środa Wielkopolska", "Trzcianka", "Trzemeszno", "Tuliszków", "Turek", "Ujście (miasto)", "Wągrowiec", "Wieleń", "Wielichowo", "Witkowo", "Wolsztyn", "Wronki", "Września", "Wyrzysk", "Wysoka (powiat pilski)", "Zagórów", "ZbąszyńZduny", "Złotów", "Żerków"];
                document.getElementById("city").innerHTML = city(citysWP);
            }
            break;
        case '16':
            {
                const citysZP = ["Barlinek", "Barwice", "Białogard", "Biały Bór", "Bobolice", "Borne Sulinowo", "Cedynia", "Chociwel", "Chojna", "Choszczno", "Czaplinek", "Człopa", "Darłowo", "Dębno", "Dobra (powiat łobeski)", "Dobrzany", "Drawno", "Drawsko Pomorskie", "Dziwnów", "Golczewo", "Goleniów", "Gościno", "Gryfice", "Gryfino", "Ińsko", "Kalisz Pomorski", "Kamień Pomorski", "Karlino", "Kołobrzeg", "Koszalin", "Lipiany", "Łobez", "Maszewo", "Mielno", "Mieszkowice", "Międzyzdroje", "Mirosławiec", "Moryń", "Myślibórz", "Nowe Warpno", "Nowogard", "Pełczyce", "Płoty", "Polanów", "Police", "Połczyn-Zdrój", "Pyrzyce", "Recz", "Resko", "Sianów", "Sławno", "Stargard", "Stepnica", "Suchań", "Szczecin", "Szczecinek", "Świdwin", "Świnoujście", "Trzcińsko-Zdrój", "Trzebiatów", "Tuczno", "Tychowo", "Wałcz", "WęgorzynoWolin (miasto)", "Złocieniec"];
                document.getElementById("city").innerHTML = city(citysZP);
            }
            break;
    }
}

function checkPassword() {
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var text = document.getElementById("checkPass");

    if (pass1 != pass2) {
        text.style.color = "rgb(230, 66, 80)";
        text.innerHTML = "Hasła nie są takie same";
    } else {
        text.innerHTML = "Hasła są takie same";
        text.style.color = "#3bb660";
    }
}


function send(event) {
    let formData = $('#form').serializeArray();
    formData = $('#form').serializeArray().map(function(r) {
        return r.name + ": " + r.value;
    }).join("\n");

    if (document.getElementById("marketing").checked != true) {
        if (confirm("Czy jesteś pewien, że nie chcesz otrzymywać materiałów marketingowych?")) {
            alert(formData);
            alert("Formularz został wysłany!");
        } else event.preventDefault();
    } else {
        alert(formData);
        alert("Formularz został wysłany!");
    }
}



function focusOnElementById(id) {
    document.getElementById(id).focus();

    getPostCode();
}

function getPostCode() {
    s = '';
    s += document.getElementById("firstNum").value;
    s += document.getElementById("secondNum").value + "-";
    s += document.getElementById("thirdNum").value;
    s += document.getElementById("fourthNum").value;
    s += document.getElementById("fifthNum").value;
    document.getElementById("postCode").value = s;
}

// tabela z książkami:

function readJSON() {
    const jsonText = JSON.stringify({
        "data": [
            { "id": 1, "author": "Arystoteles", "title": "Poetyka, Retoryka (fragmenty)", "genre": "liryka" },
            { "id": 2, "author": "Platon", "title": "Państwo", "genre": "epika" },
            { "id": 3, "author": "Arystofanes", "title": "Chmury", "genre": "liryka" },
            { "id": 4, "author": "Jan Parandowski", "title": "Mitologia, część II Rzym", "genre": "epika" },
            { "id": 5, "author": "Wergiliusz", "title": "Eneida", "genre": "liryka" },
            { "id": 6, "author": "Św. Augustyn", "title": "Wyznania", "genre": "epika" },
            { "id": 7, "author": "Św. Tomasz z Akwinu", "title": "Summa teologiczna", "genre": "epika" },
            { "id": 8, "author": "François Villon", "title": "Wielki testament", "genre": "liryka" },
            { "id": 9, "author": "François Rabelais", "title": "Gargantua i Pantagruel", "genre": "epika" },
            { "id": 10, "author": "Michel de Montaigne", "title": "Próby", "genre": "epika" },
            { "id": 11, "author": "Jan Kochanowski", "title": "Treny", "genre": "liryka" },
            { "id": 12, "author": "Piotr Skarga", "title": "Żywoty świętych", "genre": "epika" },
            { "id": 13, "author": "William Szekspir", "title": "Hamlet", "genre": "dramat" },
            { "id": 14, "author": "Sławomir Mrożek", "title": "Emigranci", "genre": "liryka" },
            { "id": 15, "author": "Juliusz Słowacki", "title": "Lilla Weneda", "genre": "liryka" },
            { "id": 16, "author": "Cyprian Kamil Norwid", "title": "Bema pamięci żałobny rapsod", "genre": "liryka" },
            { "id": 17, "author": "Honoré de Balzac", "title": "Charles Dickens", "genre": "epika" },
            { "id": 18, "author": "Stanisław Wyspiański", "title": "Noc listopadowa", "genre": "epika" },
            { "id": 19, "author": "Franz Kafka", "title": "Proces", "genre": "epika" },
            { "id": 20, "author": "Michaił Bułhakow", "title": "Mistrz i Małgorzata", "genre": "epika" },
            { "id": 21, "author": "Stanisław Ignacy Witkiewicz", "title": "Szewcy", "genre": "epika" },
            { "id": 22, "author": "Janusz Głowacki", "title": "Antygona w Nowym Jorku", "genre": "dramat" },
            { "id": 23, "author": "Bruno Schulz", "title": "Sklepy cynamonowe", "genre": "epika" },
            { "id": 24, "author": "Tadeusz Konwicki", "title": "Mała apokalipsa", "genre": "dramat" },
            { "id": 25, "author": "Jorge Luis Borges", "title": "Opowiadania", "genre": "epika" },
            { "id": 26, "author": "John Eldridge", "title": "Dzikie serce", "genre": "epika" }
        ]
    });

    return JSON.parse(jsonText);
}

function ifInclude(str, data) {
    for (var key in data) {
        if (typeof(data[key]) == 'string' && data[key].toLowerCase().includes(str.toLowerCase())) {
            return true;
        }
    }
    return false;
}

function createBooksTable(str) {
    var books = readJSON();

    s = '<table>' + '<tr>';
    for (var k in books.data[0])
        s += "<th>" + k + "</th>";

    for (i = 0; i < books.data.length; i++) {
        if (str == '' || ifInclude(str, books.data[i])) {
            s += '<tr>'
            for (var h in books.data[i]) {
                s += '<td>' + books.data[i][h] + '</td>';
            }
            s += '</tr>';
        }
    }
    s += '</table>';

    document.getElementById("list").innerHTML = s;
}