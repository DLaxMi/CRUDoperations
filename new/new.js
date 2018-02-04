$(function(){
    var operation = "A";  
    var selected_index = -1;  
    var empClients = localStorage.getItem("empClients"); 
    empClients = JSON.parse(empClients); 
    if(empClients == null)  
        empClients = []; 

    
    function Add(){ 
    var client = JSON.stringify({
        Name : $("#txtName").val(),
        Phone : $("#txtPhone").val(),
        Email : $("#txtEmail").val(),
        Salary : $("#txtSalary").val(), 
        Dateofjoin : $("#txtDate").val()
    }); 
    empClients.push(client);
    localStorage.setItem("empClients", JSON.stringify(empClients)); 
    alert("The details were saved."); 
    return true; 
} 
    
function Edit(){
    empClients[selected_index] =JSON.stringify({
       Name : $("#txtName").val(),
       Phone : $("#txtPhone").val(),
       Email : $("#txtEmail").val(),
       Salary : $("#txtSalary").val(), 
       Dateofjoin : $("#txtDate").val()
    });
    localStorage.setItem("empClients",JSON.stringify(empClients));
    alert("details  were edited");
    opertaion = "A";
    return true;
}

//Delete function

function Delete(){
    empClients.splice(selected_index,1);
    localStorage.setItem("empClients",JSON.stringify(empClients));
    alert("emp details were deleted");
    List();
}
    
    
    
    
    
    
function List(){	
    $("#empList").html("");
    
    $("#empList").html(
        "<thead>"+ 
        "<tr>"+
        "<th>Name</th>"+ 
        "<th>Phone</th>"+
        "<th>Email</th>"+
        "<th>Salary</th>"+
        "<th>Dateofjoin</th>"+
        "<th>Changes</th>"+
        "</tr>"+
        "</thead>"+
        "<tbody>"+ 
        "</tbody>" 
    );
    for(var i in empClients){ 
        var user = JSON.parse(empClients[i]);
        $("#empList tbody").append("<tr>"+
                                   "<td>"+user.Name+"</td>" +
                                   "<td>"+user.Phone+"</td>"+
                                   "<td>"+user.Email+"</td>"+
                                   "<td>"+user.Salary+"</td>" + 
                                   "<td>"+user.Dateofjoin+"</td>" +
                                   "<td><img src='./edit.png' alt='Edit"+i+"'style='margin-right:10px;' class='btnEdit'/><img src='./delete.png' alt='Delete"+i+"' class='btnDelete'/></td>" +
                                   "</tr>"); 
    }
} 
$("#formEmp").bind("submit",function(){
    if(operation == "A") 
        return Add(); 
    
}); 
List();

$(".btnEdit").bind("click", function(){
   opertaion = "E";
    selected_index = parseInt($(this).attr("alt").replace("Edit", ""));
    var user = JSON.parse(empClients[selected_index]);
    $("#txtName").val(user.Name);
    $("#txtEmail").val(user.Email);
    $("#txtSalary").val(user.Salary);
    $("#txtDate").val(user.Dateofjoin);
    $("#txtName").focus();
});


$(".btnDelete").bind("click", function(){
    selected_index = parseInt($(this).attr("alt").replace("Delete", ""));
    Delete();
    List();
});






}); 