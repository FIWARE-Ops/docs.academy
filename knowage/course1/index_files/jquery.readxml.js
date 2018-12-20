/*
* Copyright 2014 ENGINEERING GROUP
*
* Licensed under the EUPL, Version 1.1 or - as soon they
will be approved by the European Commission - subsequent
versions of the EUPL (the "License");
* You may not use this work except in compliance with the
License.
* You may obtain a copy of the License at:
*
* http://ec.europa.eu/idabc/eupl
*
* Unless required by applicable law or agreed to in
writing, software distributed under the License is
distributed on an "AS IS" basis,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied.
* See the License for the specific language governing
permissions and limitations under the License.
*/

$(function() {
    
    $.ajax({
	type : "GET",
	url : "cuepoints.xml",
	cache : false,
	dataType : "xml",
	async: false,
	
	success: function(xml) {
	    cuePoints = xml;
	    totalTime = $(xml).find("texts").attr("time");
	    title = $(xml).find("texts").attr("title");
	    
	    $('#course-title').html (title);
	    $('#audio-title').html ('');
	    $('#audio-slideshow').attr('data-audio-duration', totalTime);
	    
	    fillMenu();

	    fillSlideshow();
	    
	},	
    	error: function(jqXHR, textStatus, errorThrown) {
	    alert('Use a FireFox browser! If you are using Chrome please start browser as chrome.exe --allow-file-access-from-files');
	},	
	complete: function(jqXHR, textStatus) {
	    //load audioslideshow on complete
	    $(document).ready(function() {
		$('#audio-slideshow').audioSlideshow();
	    });
	}	
    });
});

function fillSlideshow() {
    
    var tmp_sl = "";
    var i = 0;
    $(cuePoints).find("text").each(
	    function() {
		i++;
		tmp_sl = tmp_sl + '<img src="slide/' + i 
			+ '.jpg" width="710" height="500" data-title="' + $(this).attr("name")
			+ '" data-thumbnail="slide/' + i
			+ '.jpg" data-slide-time="' + $(this).attr("cuepoint")
			+ '">';
	    });
    
    $("#audio-slides").html(tmp_sl);
}

function fillMenu() {
    var tmp_menu = "";
    var i = 0;
    $(cuePoints).find("text").each(
	    function() {
		id = 'menu_' + i++;
		tmp_menu = tmp_menu + '<a href="javascript:;" data-slide-time="' + $(this).attr("cuepoint") + '" ><div id="'+id+'" class="menu-images" >' + i + '.&nbsp;' + $(this).attr("name") + '</div></a>'; 
	    });
    
    $("#menu-slides").html(tmp_menu);      
}

function addPDF(){
    var tmp_print = '<object hidden="1" type="application/pdf" data="print/file.pdf" name="pdf_content"></object>';
    $("#print-pdf").html(tmp_print);
}


