var fname, lname, gender, country;

function _(x){
    return document.getElementById('x');
}

function processPhase1() {
    fname = _("firstname").value;
    lname = _("lastname").value;
    if (fname.length > 2 && lname.length > 2) {
        
    } else {
        alert("Please fill in the fields");
    }
    
}