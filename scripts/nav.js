$(document).ready(function () {
  console.log("Loaded");
  let $music = $(".music>img");
  $music.hover(
    function () {
      this.src = "./images/buttons/music-hov.png";
    },
    function () {
      this.src = "./images/buttons/music.png";
    }
  );
  let $shows = $(".shows>img");
  $shows.hover(
    function () {
      this.src = "./images/buttons/shows-hov.png";
    },
    function () {
      this.src = "./images/buttons/shows.png";
    }
  );
  let $gallery = $(".gallery>img");
  $gallery.hover(
    function () {
      this.src = "./images/buttons/gallery-hov.png";
    },
    function () {
      this.src = "./images/buttons/gallery.png";
    }
  );
  let $merch = $(".merch>img");
  $merch.hover(
    function () {
      this.src = "./images/buttons/merch-hov.png";
    },
    function () {
      this.src = "./images/buttons/merch.png";
    }
  );
  let $tabs = $(".tabs>img");
  $tabs.hover(
    function () {
      this.src = "./images/buttons/tabs-hov.png";
    },
    function () {
      this.src = "./images/buttons/tabs.png";
    }
  );
  let $news = $(".news>img");
  $news.hover(
    function () {
      this.src = "./images/buttons/news-hov.png";
    },
    function () {
      this.src = "./images/buttons/news.png";
    }
  );
});