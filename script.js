function getCovidData(country) {
  // QueryURL for covid-19 Data
  var queryURL = "https://api.covid19api.com/summary";
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsecovid) {
    console.log(responsecovid);
    var arr = responsecovid.Countries;
    for (var i = 0; i < arr.length; i++) {
      // Getting Countries from Array
      arr[i];
      // Starting Data
      // Countries needs to make sure its based off of user input
      // Storing Active Cases Data
      var activeCases = responsecovid.Countries[i].TotalConfirmed;
      // Displaying the Active Cases
      $("#active").text("Total Active Cases :" + activeCases);
      // Storing Total Deaths Data
      var totalDeaths = responsecovid.Countries[i].TotalDeaths;
      // Displaying Total Deaths
      $("#deaths").text("Total Deaths :" + totalDeaths);
      //Storing Total Recovered Data
      var totalRecovered = responsecovid.Countries[i].TotalRecovered;
      // Displaying Recovered Data
      $("#recovered").text("Total Recovered :" + totalRecovered);
    }
    googleNewsData();
  });
}

function googleNewsData() {
  var countryISO = $(".countryISO").val();
  var queryURL =
    "https://newsapi.org/v2/top-headlines?country=" +
    countryISO +
    "&category=health&apiKey=d7814b6763714644a52a112b30add51b";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (responsenews) {
    console.log(responsenews);

    for (var i = 0; i < responsenews.articles.length; i++) {
      var articleTitleItem = $("<li>");
      articleTitleItem.text(responsenews.articles[i].title);
      $("#article-titles").append(articleTitleItem);
      var imageURL = responsenews.articles[i].urlToImage;
      $(".image").html("<img src=" + imageURL + ">");
      $("#image").append(imageURL);
      console.log("Appended list!");
    }
  });

  // });
  // });

  // responsenews.articles.forEach(function (article) {
  //   if (article.title) {
  //   }
}

// Search button
$("#search").on("click", function (event) {
  var selectedCountry = $("countryList");
  event.preventDefault();
  // console.log(selectedCountry[0].selectedOptions[0].value);
  getCovidData();
});

// Reset Button
// $("#reset").on("click", function (event) {});
