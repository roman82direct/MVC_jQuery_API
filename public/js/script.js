$('#button').click(function(e){
    e.preventDefault();

    $.get("../app/requests/resp.php", {user:'Roman'}, function(data){
        $('#resp-block').html(data);
    });

});
$('#authButton').click(function (e) {
    e.preventDefault();

    $.post("../routes/auth.php",
        {
            uri: '/auth',
            action:'register',
            userName: $('#staticName2').val(),
            userEmail: $('#staticEmail2').val(),
            userRole: 'user',
            userPass: $('#inputPassword2').val()
        },
        function(data){
            var user = $.parseJSON(data);
            console.log(data);

            $('#exampleModal1').modal("hide");
            $('#login').css('display', 'none');
            $('#authBlock').css('display', 'none');
            $('#authUser').css('display', 'flex');
            $('#button').css('display', 'block');
            $('#showUsers').css('display', 'block');
            $('#userName').html(user.name);
        });
})

$('#loginButton').click(function (e) {
    e.preventDefault();

    $.post("../routes/auth.php",
        {
            uri: '/auth',
            action: 'login',
            userEmail: $('#staticEmail1').val(),
            userPass: $('#inputPassword1').val()
        },

        function(data, textStatus, jqXHR){
            var resp = $.parseJSON(data);
            // console.log(textStatus + ": " + jqXHR.status);
            console.log(data);

            if (resp.status === 200){
                $('#exampleModal2').modal("hide");
                $('#login').css('display', 'none');
                $('#authBlock').css('display', 'none');
                $('#authUser').css('display', 'flex');
                $('#userName').html(resp.name);
                $('#button').css('display', 'block');
                $('#showUsers').css('display', 'block');
                $('#sayBuy').css('display', 'block');

            } else {
                $('#exampleModal2').modal("hide");
                $('#login').html('Доступ Запрещен!');
            }
        });
})

$('#logoutBtn').click(function (e) {
    e.preventDefault();

    $.get("../routes/api.php",
        {action: 'logout'},
        function(data){
            // console.log(data)
            location.reload();
        });
})

$('#showUsers').click(function (e) {
    e.preventDefault();

    $.get("../routes/api.php",
        {   uri: '/user',
            action: 'getUsers',
        },
        function(data){
            console.log(data)
        });
})


