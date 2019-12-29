function onpageload() {
    var book1 = JSON.parse(window.localStorage.getItem('book'));
    document.getElementById('price').innerHTML = book1[1];
    document.getElementById('name1').innerHTML = book1[0];
    document.getElementById('img').setAttribute('src', book1[2]);
    var state = JSON.parse(window.localStorage.getItem('loginstatus'));
    if (state) {
        var id = JSON.parse(window.localStorage.getItem('loginid'));
        var userdetails = JSON.parse(window.localStorage.getItem(id));
        document.getElementById('usersignup').innerHTML = userdetails[2];
        document.getElementById('usersignup').setAttribute('data-target', '');
        document.getElementById('userlogin').innerHTML = 'Sign Out';
        document.getElementById('userlogin').setAttribute('data-target', '');
        document.getElementById('userlogin').setAttribute('onclick', 'signout()');
    }
}
function booklist(n) {
    window.localStorage.setItem('listno', JSON.stringify(n));
    window.open('booklist.html', '_self');
}
function addcart() {
    var state = JSON.parse(window.localStorage.getItem('loginstatus'));
    if (state) {
        if (window.localStorage.getItem('chart') === null) {
            var chart_1 = [];
            window.localStorage.setItem('chart', JSON.stringify(chart_1));
        }
        var c = 0;
        var book1 = JSON.parse(window.localStorage.getItem('book'));
        var chart = JSON.parse(window.localStorage.getItem('chart'));
        var item = [book1[0], 1, book1[1], book1[1]];
        for (var i in chart) {
            if (chart[i][0] === item[0]) {
                chart[i][1]++;
                chart[i][3] = parseInt(chart[i][3]) + parseInt(item[2]);
                c = 1;
            }
        }
        if (c == 0)
            chart.push(item);
        window.localStorage.setItem('chart', JSON.stringify(chart));
        window.open('cart.html', '_self');
    }
    else {
        alert('You must first Login to Buy the BookS');
    }
}
function backProduct() {
    window.open('booklist.html', '_self');
}
function signup() {
    var e = true, u = true, p = true, n = true;
    var emaill = document.getElementById('email').value;
    var user = document.getElementById('uname').value;
    var num = document.getElementById('num').value;
    var pass = document.getElementById('pass').value;
    var name = document.getElementById('name').value;
    var epattern = /@gmail.com/i;
    if (!(epattern.test(emaill))) {
        alert('InValid Email Id (Must be specified as @gmail.com)');
        e = false;
    }
    var ppattern = new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])");
    if (!(ppattern.test(pass))) {
        alert('InValid Password (Must contain [A-Z],[a-z],[0-9])');
        p = false;
    }
    var upattern = new RegExp("(?=.*[^A-Z])(?=.*[^a-z])");
    if (upattern.test(user)) {
        alert('InValid User Name (Only Alpha character Allowed)');
        u = false;
    }
    var npatter = new RegExp("(?=.*[^0-9])");
    if (num.length != 10) {
        alert('Phone No. must contain 10 digit');
        n = false;
    }
    if (e && p && u && n) {
        if (!(window.localStorage.getItem(user) === null)) {
            alert('Already there is an account created with this user id . you can either change or login');
        }
        else {
            window.localStorage.setItem("loginstatus", JSON.stringify(true));
            window.localStorage.setItem("loginid", JSON.stringify(user));
            var item = [user, pass, name, emaill, num];
            window.localStorage.setItem(user, JSON.stringify(item));
            window.open('viewbook.html', '_self');
        }
    }
}
function signout() {
    window.localStorage.setItem('loginstatus', JSON.stringify(false));
    document.getElementById('userlogin').innerHTML = 'Login';
    document.getElementById('userlogin').setAttribute('data-target', '#login');
    document.getElementById('userlogin').removeAttribute('onclick');
    document.getElementById('usersignup').innerHTML = 'Sign Up';
    document.getElementById('usersignup').setAttribute('data-target', '#sign');
}
function login() {
    var user = document.getElementById('luname').value;
    var pass = document.getElementById('lpass').value;
    if (window.localStorage.getItem(user) === null) {
        alert('There is no such account from this user name. You can create new Account!');
    }
    else {
        var details = JSON.parse(window.localStorage.getItem(user));
        if (details[1] == pass) {
            window.localStorage.setItem("loginstatus", JSON.stringify(true));
            window.localStorage.setItem("loginid", JSON.stringify(user));
            window.open('viewbook.html', '_self');
        }
        else {
            alert('InValid Password');
        }
    }
}
function viewchart() {
    var state = JSON.parse(window.localStorage.getItem('loginstatus'));
    if (state) {
        window.open('cart.html', '_self');
    }
    else {
        alert('You must first Login to Buy the BookS');
    }
}
