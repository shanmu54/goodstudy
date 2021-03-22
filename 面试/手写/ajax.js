var ajax = new XMLHttpRequest()

ajax.open('GET',url,true)
ajax.setRequestHeader('content-type','application/x-www-form-urlencoded')

ajax.send()

ajax.onreadystatechange = function(obj) {
    if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) { 
    }
}