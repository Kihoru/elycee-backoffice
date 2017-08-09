$(document).ready(function() {

    $('select').material_select();

    $('.collapsible').collapsible();

    $('.delete-btn').on('click', function() {
        toastr.error('QCM DELETED', 'Infos !');
    });
});
