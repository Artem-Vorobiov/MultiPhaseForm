var fname, lname, gender, country;

function _(x){
    return document.getElementById(x);
}

function processPhase1() {
    fname = _("firstname").value;
    lname = _("lastname").value;
    if (fname.length > 2 && lname.length > 2) {
        _('phase1').style.display = "none";
        _('phase2').style.display = "block";
    } else {
        alert("Please fill in the fields");
    }    
}

function processPhase2() {
    gender = _('gender').value;
    if (gender.length > 0){
        _('phase2').style.display = "none";
        _('phase3').style.display = "block";
    } else {
        alert("Please choose your gender");
    }
}
