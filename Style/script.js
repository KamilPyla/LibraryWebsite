function pushMenu(name) {

    $('#menu').load('./menu.html');
}


//////////////////////////////////////////////////////////////////

function prov() {

    $.getJSON('../Data/citys.json', function(province) {

        s = '<option value="none"> Wybierz Województwo </option>';

        province.data.forEach(function(p) {
            s += '<option value=' + p.id + '> ' + p.province + ' </option>';
        });
        document.getElementById('province').innerHTML = s;
    });
}

function insertCitys(index) {
    $.getJSON('../Data/citys.json', function(el) {

        s = '';
        el.data[index].citys.forEach(function(city) {
            s += '<option value="' + city + '">' + city + '</option>';
        });
        document.getElementById('city').innerHTML = s;
    })

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

    let formData = $('#form').serializeArray()

    let markAgree = false;
    formData.forEach(function(el) {
        if (el.name == 'marketing')
            markAgree = true;
    });

    formData = formData.map(function(r) {
        return r.name + ": " + r.value;
    }).join("\n");

    if (markAgree) {
        alert(formData);
        alert("Formularz został wysłany!");
    } else {
        if (confirm("Czy jesteś pewien, że nie chcesz otrzymywać materiałów marketingowych?")) {
            alert(formData);
            alert("Formularz został wysłany!");
        } else event.preventDefault();
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


///////////////////////////////////////////////////////////////////

function ifInclude(str, data) {

    for (var key in data) {
        if (typeof(data[key]) == 'string' && data[key].toLowerCase().includes(str.toLowerCase())) {
            return true;
        }
    }
    return false;
}


function createBooksTable(str) {

    $.getJSON('../Data/booksdataset.json', function(books) {
        s = '<table>' + '<tr>';

        for (var k in books.data[0])
            s += "<th>" + k + "</th>";

        for (i = 0; i < books.data.length; i++) {
            if (str == '' || ifInclude(str, books.data[i])) {

                s += '<tr>'

                for (var h in books.data[i])
                    s += '<td>' + books.data[i][h] + '</td>';

                s += '</tr>';
            }
        }
        s += '</table>';
        document.getElementById("list").innerHTML = s;
    });
}