


//curent date
function setDate() {
    var date = new Date();

    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;

    var today = year + "-" + month + "-" + day;

    document.getElementById("datepicker").value = today;
}


//detapicker

$('#datetimepicker2').datepicker({
    format: "yyyy-mm-dd",
    weekStart: 1,
    todayBtn: "linked",
    keyboardNavigation: false,
    forceParse: false,
    autoclose: true,
    daysOfWeekHighlighted: "0,6",
    todayHighlight: true,
    beforeShowYear: function (date) {
        if (date.getFullYear() == 2007) {
            return false;
        }
    }

});


$("#timeSelect").change(function () {
    var select = $("#timeSelect");
    var isSelectEmpty = select.val() === "none";

    if(isSelectEmpty){
        document.getElementById('workerWrittenTime').disabled = false;
    }
    else{
        document.getElementById('workerWrittenTime').disabled = true;
    }
   
})



$('#workerWrittenTime').keyup(function () {
    $('#timeSelect').prop('disabled', !!$(this).val());
});

$('#workerWrittenTime').change(function () {
    $('#timeSelect').prop('disabled', !!$(this).val());
    
});


function alertMessage(){
   var date = $("#datepicker").val();
    var project = $("#projectSelect").find(":selected").text();
    var subject = $("#subjectSelect").find(":selected").text();
    var workingHour;
    var workingTimeFromSelect = $("#timeSelect").find(":selected").attr("value");
    if(workingTimeFromSelect!="none"){
        workingHour = workingTimeFromSelect;
    }
    else{
        workingHour = ($("#workerWrittenTime").val());
    }



    alert("Great job!"+ date +" you work " +workingHour+" hours "+ "on a project "+ project+" and subject "+subject+"See you!!!");
}




