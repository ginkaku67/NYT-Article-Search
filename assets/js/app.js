$(document).ready(function(){
$("#SEARCHBUTTON").on("click", function () {

    //variables to store text field values
    var searchResult = $("#SEARCHTEXTFIELD").val();
    var numberResult = $("#NUMBERTEXTFIELD").val();
    var startYearResult = $("#SDATETEXTFIELD").val();
    var endYearResult = $("#EDATETEXTFIELD").val();

    if (startYearResult !== "(Optional)" && endYearResult !== "(Optional)") {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchResult + "&facet_fields=source&facet=true&begin_date=" + startYearResult + "0101&end_date=" + endYearResult + "1231&api-key=XAuF7o3HfClOzfN1qqtpc0G2UuoqWqGz";
    }
    else {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchResult + "&api-key=XAuF7o3HfClOzfN1qqtpc0G2UuoqWqGz";
    }
    //var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchResult + "&api-key=XAuF7o3HfClOzfN1qqtpc0G2UuoqWqGz";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


        console.log(response);



        for (i = 0; i < numberResult; i++) {

            //This is just to correctly display the first result as #1 instead of #0
            var counter = parseInt([i]) + 1;

            var articleResult = $("<h2>").text("#" + counter + " " + response.response.docs[i].headline.main);
            $("#DISPLAYDIV").append(articleResult);

        }

    });
});
$("#CLEARBUTTON").on("click", function () {
    $("#DISPLAYDIV").empty();
});
});