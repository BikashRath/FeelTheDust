window.onload = function () {
	$('#slideimage').orbit();
} ;

$(document).on('click', '#home', function () {
	highlight($(this));
	$.ajax({
		url: '/thedust/jsp/home/home.jsp',
		type: 'GET'
	}).success(function(response){
		$('.primary-content-panel .content').empty().append($(response));
		$('#slideimage').orbit();
	}).fail(function(){
		console.log('failure');
	});
});

$(document).on('click', '#aboutus', function () {
	highlight($(this));
	$.ajax({
		url: '/thedust/jsp/aboutus/aboutus.jsp',
		type: 'GET'
	}).success(function(response){
		$('.primary-content-panel .content').empty().append($(response));
	}).fail(function(){
		console.log('failure');
	});
});

$(document).on('click', '#events', function () {
	highlight($(this));
	$.ajax({
		url: '/thedust/jsp/events/events.jsp',
		type: 'GET'
	}).success(function(response){
		$('.primary-content-panel .content').empty().append($(response));
	}).fail(function(){
		console.log('failure');
	});
});

$(document).on('click', '#register', function () {
	highlight($(this));
	$.ajax({
		url: '/thedust/jsp/register/register.jsp',
		type: 'GET'
	}).success(function(response){
		$('.primary-content-panel .content').empty().append($(response));
	}).fail(function(){
		console.log('failure');
	});
});

$(document).on('click', '#gallery', function () {
	highlight($(this));
	$.ajax({
		url: '/thedust/jsp/gallery/gallery.jsp',
		type: 'GET'
	}).success(function(response){
		$('.primary-content-panel .content').empty().append($(response));
	}).fail(function(){
		console.log('failure');
	});
});

$(document).on('click', '#contactus', function () {
	highlight($(this));
	$.ajax({
		url: '/thedust/jsp/contactus/contactus.jsp',
		type: 'GET'
	}).success(function(response){
		$('.primary-content-panel .content').empty().append($(response));
	}).fail(function(){
		console.log('failure');
	});
});

$(document).on("click", "#registersubmit", function(){
	highlight($(this));
	$.ajax({
		url: 'https://docs.google.com/spreadsheet/ccc?key=0AtWtDneDACnFdDNzR1MxR1VsdERpX3pqa1FWWnUtQ0E&usp=drive_web/formResponse',
		type: 'POST',
		dataType: "xml",
		data: $('.content .registration form').serialize()
	}).success(function(response){
		alert("success");
	}).fail(function(){
		alert("failure");
	});
	
});

function highlight (element) {
	$('.header .menu li a').removeClass('highlight');
	$(element).addClass('highlight');
}