$(function() {
$('#mycarousel').jcarousel({
	scroll:1,
	wrap:"both",
	animation: 'slow'})
                .jcarouselAutoscroll({
	interval: 3000,
	target: '+=1',
	autostart: true});
    
$('.jcarousel-prev').jcarouselControl({ target: '-=1' });
$('.jcarousel-next').jcarouselControl({ target: '+=1' });
    
$('.jcarousel-pagination').on('jcarouselpagination:active', 'a', function() {$(this).addClass('active');})
                          .on('jcarouselpagination:inactive', 'a', function() {$(this).removeClass('active');})    
                          .jcarouselPagination({item: function(page) {return '<a href="#' + page + '">' + page + '</a>';} });
///   
$(".niceCheck").each(
function() {changeCheckStart($(this))});
//
function changeCheck(el){
var el = el,
input = el.find("input").eq(0);

if(el.attr("class").indexOf("niceCheckDisabled")==-1)
{if(!input.attr("checked")) {
el.addClass("niceChecked");
input.attr("checked", true);} 
else {
el.removeClass("niceChecked");
input.attr("checked", false).focus();}
}

return true;}
//
function changeVisualCheck(input){
var wrapInput = input.parent();

if(!input.attr("checked")) 
{wrapInput.removeClass("niceChecked")}
else {wrapInput.addClass("niceChecked")}};
//
function changeCheckStart(el){

try {
var el = el,
checkName = el.attr("name"),
checkId = el.attr("id"),
checkChecked = el.attr("checked"),
checkDisabled = el.attr("disabled"),
checkTab = el.attr("tabindex"),
checkValue = el.attr("value");

if(checkChecked)
{el.after("<span class='niceCheck niceChecked'>"+
	"<input type='checkbox'"+
	"name='"+checkName+"'"+
	"id='"+checkId+"'"+
	"checked='"+checkChecked+"'"+
	"value='"+checkValue+"'"+
	"tabindex='"+checkTab+"' /></span>")}
else 
{el.after("<span class='niceCheck'>"+
	"<input type='checkbox'"+
	"name='"+checkName+"'"+
	"id='"+checkId+"'"+
	 "value='"+checkValue+"'"+
	"tabindex='"+checkTab+"' /></span>")};
if(checkDisabled)
{el.next().addClass("niceCheckDisabled");
 el.next().find("input").eq(0).attr("disabled","disabled");};

el.next().bind("mousedown", function(e) { changeCheck($(this)) });
el.next().find("input").eq(0).bind("change", function(e) { changeVisualCheck($(this)) });

if($.browser.msie){el.next().find("input").eq(0).bind("click", function(e) {changeVisualCheck($(this))})}
el.remove();}
	
catch(e){}

return true;}
///
$("#main_menu li ul li ul").mouseenter(function () {
$(this).animate({backgroundColor:"#03C"}, 500 );
$(this).find("a").animate({color:"#ffffff"},500);});

$("#main_menu li ul li ul").mouseleave(function() {
$(this).animate({backgroundColor:"#FFFF00"}, 500 );
$(this).find("a").animate({color:"#000"},500);});
///
var params = {
changedEl: ".lineForm select"}
cuSel(params);});
///
$("#main_menu li ul li ul").mouseenter(function () {
$(this).animate({backgroundColor:"#03C"}, 500 );
$(this).find("a").animate({color:"#ffffff"},500);});
