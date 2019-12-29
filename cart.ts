function onpageload(){
    let total =0;
    var chart = JSON.parse(window.localStorage.getItem('chart'));
    for(var i in chart){
        let table = <HTMLTableElement>document.getElementById('cartTable');
        let row = table.insertRow(table.rows.length);
        for(let j=0;j<4;j++){
            row.insertCell(j).innerHTML=chart[i][j];
        }
        total += parseInt(chart[i][3]); 
    }
    let table = <HTMLTableElement>document.getElementById('cartTable');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    cell3.innerHTML='GRAND TOTAL';
    cell4.innerHTML=JSON.stringify(total);
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
function backProduct(){
    window.open('viewbook.html','_self');
}
function booklist(n:number){
    window.localStorage.setItem('listno',JSON.stringify(n));
    window.open('booklist.html','_self');
}
function checkOut(){
    window.open('checkout.html','_self');
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