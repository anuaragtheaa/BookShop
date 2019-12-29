function booklist(n:number){
    window.localStorage.setItem('listno',JSON.stringify(n));
    window.open('booklist.html','_self');
}
function backProduct(){
    window.open('index.html','_self')
}
function signout(){
    window.localStorage.setItem('loginstatus',JSON.stringify(false));
    document.getElementById('userlogin').innerHTML='Login';
    document.getElementById('userlogin').setAttribute('data-target','#login');
    document.getElementById('userlogin').removeAttribute('onclick');
    document.getElementById('usersignup').innerHTML='Sign Up';
    document.getElementById('usersignup').setAttribute('data-target','#sign');
    window.open('index.html','_self');
}
function onpageload(){
    let state = JSON.parse(window.localStorage.getItem('loginstatus'));
    if(state){
        let id = JSON.parse(window.localStorage.getItem('loginid'));
        let userdetails = JSON.parse(window.localStorage.getItem(id));
        document.getElementById('usersignup').innerHTML=userdetails[2];
        document.getElementById('usersignup').setAttribute('data-target','');
        document.getElementById('userlogin').innerHTML='Sign Out';
        document.getElementById('userlogin').setAttribute('data-target','');
        document.getElementById('userlogin').setAttribute('onclick','signout()');
    }
}