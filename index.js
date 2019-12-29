function view(n) {
    var py = [['Python Cookbook', '550', 'images/python1.jpg'],
        ['Learning Python', '600', 'images/python2.jpg'],
        ['Think Python', '500', 'images/python3.jpg'],
        ['Angular2 Cookbook', '450', 'images/angular1.jpg'],
        ['Angular Expert', '500', 'images/angular2.jpg'],
        ['Angular Book', '550', 'images/angular3.jpg'],
        ['SQL-The Complete Reference', '550', 'images/sql1.jpg'],
        ['Learning SQL', '650', 'images/sql2.jpg'],
        ['Introduction to SQL', '400', 'images/sql3.jpg']];
    window.localStorage.setItem('book', JSON.stringify(py[n]));
    window.open('viewbook.html', '_self');
}
function booklist(n) {
    window.localStorage.setItem('listno', JSON.stringify(n));
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
            window.open('index.html', '_self');
        }
    }
}
function onpageload() {
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
            window.open('index.html', '_self');
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
