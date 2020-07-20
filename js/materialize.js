document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, );
});
// var dropdowns = document.querySelectorAll('.dropdown-trigger')
// for (var i = 0; i < dropdowns.length; i++) {
//     M.Dropdown.init(dropdowns[i]);
// }
var instance = M.Dropdown.getInstance(elem);
M.AutoInit();