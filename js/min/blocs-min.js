function getHeroHeight(){var o=$(window).height();return o<heroBodyH&&(o=heroBodyH+100),o}function checkHero(){P=2*parseInt($(".hero-nav").css("padding-top")),window.heroBodyH=$(".hero-nav").outerHeight()+P+$(".v-center").outerHeight()+50,$(".hero").css("height",getHeroHeight()+"px")}function scrollToTarget(o){o=1==o?0:2==o?$(document).height():$(o).offset().top,$("html,body").animate({scrollTop:o},"slow")}function animateWhenVisable(){hideAll(),inViewCheck(),$(window).scroll(function(){inViewCheck(),scrollToTopView()})}function hideAll(){$(".animated").each(function(o){$(this).closest(".hero").length||$(this).removeClass("animated").addClass("hideMe")})}function inViewCheck(){$($(".hideMe").get().reverse()).each(function(o){var e=jQuery(this);if(a=e.offset().top+e.height(),b=$(window).scrollTop()+$(window).height(),a<b){var i=e.attr("class").replace("hideMe","animated");e.css("visibility","hidden").removeAttr("class"),setTimeout(function(){e.attr("class",i).css("visibility","visable")},.01)}})}function scrollToTopView(){$(window).scrollTop()>$(window).height()/3?$(".scrollToTop").hasClass("showScrollTop")||$(".scrollToTop").addClass("showScrollTop"):$(".scrollToTop").removeClass("showScrollTop")}$(window).load(function(){checkHero(),animateWhenVisable()}),$(document).ready(function(){$(".hero").css("height",$(window).height()+"px"),$("#scroll-hero").click(function(){$("html,body").animate({scrollTop:$("#hero-bloc").height()},"slow")})}),$(window).resize(function(){$(".hero").css("height",getHeroHeight()+"px")}),$(function(){$('[data-toggle="tooltip"]').tooltip()});