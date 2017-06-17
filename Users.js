

function GetAll() {

    $.ajax({
        url: "http://localhost:51423/api/Users/GetUsers",
        type: 'GET',
        datatype: 'JSON',
        success: function (data) {
            tbl(data);
        },
        error: function () {
            alert(Error);
        }
    })
}

function tbl(usr) {
    var result = '<table><th>Id</th><th>Name</th><th>PhoneNo</th><th>City</th>';
    $.each(usr, function (index, user) {
        result += "<tr><td>" + user.Id + "</td><td>" + user.Name + "</td><td>" + user.PhoneNo + "</td><td>" + user.City + "</td><td><button onclick='Getbyid(" + user.Id + ")'>update</button><button onclick='Delete(" + user.Id + ")'>delete</button></td></tr>";
    })
    result += "</table>";
    $("#tblData").html(result);
}


function Insert() {
    var nm = $("#txtName").val();
    var pn = $("#txtPhoneNo").val();
    var ct = $("#txtCity").val();

    $("#btnUpdate").hide();
    $("#btnInsert").show();
    var result = {
        Name: nm,
        PhoneNo: pn,
        City: ct
    }

    $.ajax({
        type: 'POST',
        data: JSON.stringify(result),
        url: 'http://localhost:51423/api/Users/PostUser',
        contentType: "application/json",
        success: function () {

        }
    });

}

function Getbyid(id) {
    alert(id);
    $.ajax({
        type: 'GET',
        //data: JSON.stringify(result),
        url: 'http://localhost:51423/api/Users/GetUser/'+id,
        contentType: "application/json",
        success: function (data) {
            console.log(data);
            $("#btnUpdate").show();
            $("#btnInsert").hide();
            $("#txtName").val(data.Name);
            $("#txtPhoneNo").val(data.PhoneNo);
            $("#txtCity").val(data.City);
            $("#userid").val(data.Id);
        }
    });
}

function Update() {
    var nm = $("#txtName").val();
    var pn = $("#txtPhoneNo").val();
    var ct = $("#txtCity").val();
    var id = $("#userid").val();
    alert(id);
    
    var result = {
        Id:id,
        Name: nm,
        PhoneNo: pn,
        City: ct
    }

    $.ajax({
        type: 'POST',
        data: JSON.stringify(result),
        url: 'http://localhost:51423/api/Users/UpdateUser',
        contentType: "application/json",
        success: function () {

        }
    });
}

function Delete(id) {
    alert(id);
    $.ajax({
        type: 'DELETE',
        //data: JSON.stringify(result),
        url: 'http://localhost:51423/api/Users/DeleteUser/' + id,
        contentType: "application/json",
        success: function () {
            alert("ok");
        }
    });
}

