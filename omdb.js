$(function() {
	$("form").on("submit", function(event) {
		event.preventDefault();
		var $container = $("#container");
		var title = $("#title").val();
		$("#title").val("");
		$container.html("");
		
		$.get("http://www.omdbapi.com/?t="+title, function(response) {
			if (response.Response === "False") {
				$container.append('"'+title+'" not found!');
			}
			else {
				var $title = $("<span></span>").text(response.Title);
				var $year = $("<span></span>").text(response.Year);
				var $poster = $("<img>", {
					src: response.Poster,
					alt: "Movie Poster",
				});
				$container.append($title, $year, $poster);
			}
		});
	});
});