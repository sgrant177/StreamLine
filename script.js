$(document).ready(function () {
    var gameTrends = [];
    var carouselGame = gameTrends[count];
    var count = 1;

    window.onload = function () {
        $(".gamecard").each(function () {
            let thisGame = $(this).data("game");
            gameTrends.push(thisGame)
        });

        var game = gameTrends[0]
        var ytKey = "AIzaSyBuRxDo7OxheAUCt0Kj5T14U2gug7CQ6YM";
        var findgameUrl = `https://www.googleapis.com/youtube/v3/search?q=${game}&type=video&eventType=live&videoEmbeddable=true&relevanceLanguage=en&key=${ytKey}`;

        $.ajax({
            url: findgameUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let vidId = response.items[0].id.videoId;
            $("#vidOnLoad").empty();
            $("#vidOnLoad").html(`
                    <iframe width = "800" height = "450" src = "https://www.youtube.com/embed/${vidId}?autoplay=1" frameborder = "0"
                    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen ></iframe>
                    `);


        });

        carouselGame = gameTrends[0];
        carouselGame = carouselGame.replace(/\s+/g, '-');
        console.log(carouselGame);
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rawg-video-games-database.p.rapidapi.com/games/" + carouselGame,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8"
            }
        }
        $.ajax(settings).done(function (response) {

            console.log(response);
            var gameDescription = response.description_raw;
            var genre = response.genres[0].name;
            var gameTitle = response.name;
            

            var titleSlot = $("#carTitle1");
            titleSlot.text(gameTitle);

            var posterSlot = $("#carImg1")
            posterSlot.attr("src", `assets/images/${carouselGame}.jpg`)

            var descriptionSlot = $("#carDescript1");
            descriptionSlot.text(gameDescription)

            var genreSlot = $("#carGenre1");
            genreSlot.text(genre);

        });
        

    }

    $(".carSlide").click(function () {

        var game = gameTrends[count]
        var ytKey = "AIzaSyBuRxDo7OxheAUCt0Kj5T14U2gug7CQ6YM";
        var findgameUrl = `https://www.googleapis.com/youtube/v3/search?q=${game}&type=video&eventType=live&videoEmbeddable=true&relevanceLanguage=en&key=${ytKey}`;

        $.ajax({
            url: findgameUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let vidId = response.items[0].id.videoId;
            $("#vidOnLoad").empty();
            $("#vidOnLoad").html(`
                    <iframe width = "800" height = "450" src = "https://www.youtube.com/embed/${vidId}?autoplay=1" frameborder = "0"
                    allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen ></iframe>
                    `);


        });
        

        if ($(".carousel-item").first().hasClass("active")) {
            carouselGame = gameTrends[count];
            carouselGame = carouselGame.replace(/\s+/g, '-');
            console.log(carouselGame);

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://rawg-video-games-database.p.rapidapi.com/games/" + carouselGame,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8"
                }
            }
            $.ajax(settings).done(function (response) {

                console.log(response);
                var gamePoster = response.background_image;
                var gameDescription = response.description_raw;
                var genre = response.genres[0].name;
                var gameTitle = response.name;


                var titleSlot = $("#carTitle2");
                titleSlot.text(gameTitle);

                var posterSlot = $("#carImg2")
                posterSlot.attr("src", `assets/images/${carouselGame}.jpg`)

                var descriptionSlot = $("#carDescript2");
                descriptionSlot.text(gameDescription)

                var genreSlot = $("#carGenre2");
                genreSlot.text(genre);

            });
        }
        else {
            var carouselGame = gameTrends[count];
            carouselGame = carouselGame.replace(/\s+/g, '-');
            console.log(carouselGame);

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://rawg-video-games-database.p.rapidapi.com/games/" + carouselGame,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                    "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8"
                }
            }
            $.ajax(settings).done(function (response) {

                console.log(response);
                var gamePoster = response.background_image;
                var gameDescription = response.description_raw;
                var genre = response.genres[0].name;
                var gameTitle = response.name;


                var titleSlot = $("#carTitle1");
                titleSlot.text(gameTitle);

                var posterSlot = $("#carImg1")
                posterSlot.attr("src", `assets/images/${carouselGame}.jpg`)

                var descriptionSlot = $("#carDescript1");
                descriptionSlot.text(gameDescription)

                var genreSlot = $("#carGenre1");
                genreSlot.text(genre);

            });
        };
        count++;
        if ( count <= 9 ) {
            count == 0;
        }
        return count;
    });

    // --------------chicken coop call-----------------
    // $("#gameGo").click(function () {
    //     var title = $("#title").val();
    //     var platform = $(".platforms option:selected").val()
    //     var settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": "https://chicken-coop.p.rapidapi.com/games/" + title + "?platform=" + platform,
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "chicken-coop.p.rapidapi.com",
    //             "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8"
    //         }
    //     }
    //     $.ajax(settings).done(function (response) {
    //         console.log(response);
    //         var allPlatforms = response.result.alsoAvailableOn;
    //         var gameDescription = response.result.description;
    //         var developer = response.result.developer;
    //         var genre = response.result.genre;
    //         var gamePoster = response.result.image;
    //         var publisher = response.result.publisher;
    //         var rating = response.result.rating;
    //         var releaseDate = response.result.releaseDate;
    //         var score = response.result.score;
    //         var title = response.result.title;
    //         console.log(title);
    //         console.log(platform);
    //         console.log(allPlatforms);
    //         console.log(gameDescription);
    //         console.log(developer);
    //         console.log(genre);
    //         console.log(gamePoster);
    //         console.log(publisher);
    //         console.log(rating);
    //         console.log(releaseDate);
    //         console.log(score);
    //         console.log(title);
    //     });
    // });

    var ytKey = "AIzaSyAY5zBEXfUqpDKiOe9KuvbjzzYyR4VieiE";
    $("#streamerGo").click(function () {
        $("#homeContent").addClass("collapse")
        $("#gameData1").addClass("collapse")
        $("#gameData2").addClass("collapse")
        // $("#gameRow").removeClass("justify-content-between")
        $("#results").removeClass("collapse")
        $("#results").addClass("d-flex")
        $("#results").addClass("justify-content-center")
        var user = $("#streamer").val();
        $("#streamer").val("");
        var ytKey = "AIzaSyAY5zBEXfUqpDKiOe9KuvbjzzYyR4VieiE";
        var channelUrl = `https://www.googleapis.com/youtube/v3/search?q=${user}&type=channel&key=${ytKey}`;



        $.ajax({
            url: channelUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            var channel = response.items[0].id.channelId;

            var searchUrl = `https://www.googleapis.com/youtube/v3/search?channelId=${channel}&type=video&eventType=live&videoEmbeddable=true&relevanceLanguage=en&key=${ytKey}`;

            $.ajax({
                url: searchUrl,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                let vidId = response.items[0].id.videoId;
                $("#vidResult").empty();
                $("#vidResult").html(`
                <iframe width = "800" height = "450" src = "https://www.youtube.com/embed/${vidId}?autoplay=1" frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
                `);
            });


        });
    });
   
    $("#gameGo").click(function () {
        var title = $("#game").val();
        title = title.replace(/\s+/g, '-');
        console.log(title)

        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rawg-video-games-database.p.rapidapi.com/games/" + title,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8"
            }
        }
        $.ajax(settings).done(function (response) {

            console.log(response);
            var gamePoster = response.background_image;
            var gameDescription = response.description_raw;
            var website = response.website;
            var score = response.metacritic;
            var gameTitle = response.name;

            var titleSlot = $("#currentGame");
            titleSlot.text(gameTitle);

            var posterSlot = $("#gamePoster")
            posterSlot.attr("src", gamePoster)

            var descriptionSlot = $("#gameDescription");
            descriptionSlot.text(gameDescription)

            var websiteSlot = $("#currentWebsite");
            websiteSlot.attr("href", website)
            websiteSlot.attr("target", "_blank")

            var ratingSlot = $("#rating");
            ratingSlot.text("Rating: " + score);

        });
    })

    $("#gameGo").click(function () {
        $("#homeContent").addClass("collapse")
        $("#results").removeClass("collapse")
        var game = $("#game").val();
        $("#game").val("");
        var ytKey = "AIzaSyBuRxDo7OxheAUCt0Kj5T14U2gug7CQ6YM";
        var findgameUrl = `https://www.googleapis.com/youtube/v3/search?q=${game}&type=video&eventType=live&videoEmbeddable=true&relevanceLanguage=en&key=${ytKey}`;



        $.ajax({
            url: findgameUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let vidId = response.items[0].id.videoId;
            $("#vidResult").empty();
            $("#vidResult").html(`
                <iframe width = "800" height = "450" src = "https://www.youtube.com/embed/${vidId}?autoplay=1" frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
                `);


        });
    })

    $(".gamecard").on("click", function(){

        $("#homeContent").addClass("collapse")
        $("#results").removeClass("collapse")
        var ytKey = "AIzaSyBuRxDo7OxheAUCt0Kj5T14U2gug7CQ6YM";
        var game = $(this).data("game");
        var findgameUrl = `https://www.googleapis.com/youtube/v3/search?q=${game}&type=video&eventType=live&videoEmbeddable=true&relevanceLanguage=en&key=${ytKey}`;
        
        $.ajax({
            url: findgameUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            let vidId = response.items[0].id.videoId;
            $("#vidResult").empty();
            $("#vidResult").html(`
                <iframe width = "800" height = "450" src = "https://www.youtube.com/embed/${vidId}?autoplay=1" frameborder = "0"
                allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen ></iframe>
                `);


        });

        game = game.replace(/\s+/g, '-');
        console.log(game);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://rawg-video-games-database.p.rapidapi.com/games/" + game,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "6d516cdd9emshc157afd8ba21176p172510jsne773e6df5ba8"
            }
        }
        $.ajax(settings).done(function (response) {

            console.log(response);
            var gamePoster = response.background_image;
            var gameDescription = response.description_raw;
            var website = response.website;
            var score = response.metacritic;
            var gameTitle = response.name;

            var titleSlot = $("#currentGame");
            titleSlot.text(gameTitle);

            var posterSlot = $("#gamePoster")
            posterSlot.attr("src", gamePoster)

            var descriptionSlot = $("#gameDescription");
            descriptionSlot.text(gameDescription)

            var websiteSlot = $("#currentWebsite");
            websiteSlot.attr("href", website)
            websiteSlot.attr("target", "_blank")

            var ratingSlot = $("#rating");
            ratingSlot.text("Rating: " + score);

            $("#video-carousel-example").addClass("collapse")
            $("#results").removeClass("collapse")
            $('html, body').animate({
                scrollTop: $("#results").offset().top
              }, 500);
        });
    })
});