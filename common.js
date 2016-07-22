// - ////////////////// - для blur задать цикл или условие


    var first = document.getElementById('firstname');
    var second = document.getElementById('lastname');
window.addEventListener('click', function(event) {

    if (event.target == first){
        first.style.backgroundColor = "red";
    }
    if (event.target == second) {
        second.style.backgroundColor = "green";
    }
})

first.addEventListener('blur', function(event) {
    first.style.backgroundColor = "orange";
})
second.addEventListener('blur', function(event) {
    second.style.backgroundColor = "black";
})

// - ////////////////////////

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
        _('progressBar').value = 33;
        _('status').innerHTML = "Phase 2 of 3"
    } else {
        alert("Please fill in the fields");
    }    
}

function processPhase2() {
    gender = _('gender').value;
    if (gender.length > 0){
        _('phase2').style.display = "none";
        _('phase3').style.display = "block";
        _('progressBar').value = 66;
        _('status').innerHTML = "Phase 3 of 3"
    } else {
        alert("Please choose your gender");
    }
}

function processPhase3() {
    country = _("country").value;
    if (country.length > 0) {
        _('phase3').style.display = 'none';
        _('show_all_data').style.display = "block";
        _('progressBar').value = 100;
        _('status').innerHTML = "Data Overview";
        
// LOOK HERE VERY USEFULL !!!!
        
        
        _('display_fname').innerHTML = fname;
        _('display_lname').innerHTML = lname;
        _('display_country').innerHTML = country;
        _('display_gender').innerHTML = gender;
    } else {
        alert('Please choose your Country');
    }
}

// INTERESTING

function submitForm() {
    _("multiphase").method = 'post';
    _("multiphase").action = 'my_parser.php';
    _("multiphase").submit();
    
}
