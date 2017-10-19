$(function () {
	var loading = $(".loading");
	var main = $(".page_zero");
	var level1 = $(".page_one");
	var level2 = $(".page_two");
	var level3 = $(".page_three");
	var level4 = $(".page_four");
	var level5 = $(".page_five");
	var openbtn = $(".btn_open_music");
	var bgMusic = $("#bgMusic").get(0);
	var open = false;
	var images=['car.png','dialog_fail_.png','dialog_success.png','page_cai_bg.jpg','page_cai_collection2.png','page_cai_collection3.png','page_cai_collection4.png','page_cai_word_list5.jpg','page_great_eye.png','page_home-bg.jpg','page_home_btn.png','page_home_car.png','page_home_identify.png','page_home_intro.png','page_home_true.png','page_level1_fail.jpg','page_level1_icon.jpg','page_level1_list.jpg','page_level2_fail.jpg','page_level2_icon.jpg','page_level2_list.jpg','page_level3_fail.jpg','page_level3_icon.jpg','page_level3_list.jpg','page_level4_fail.jpg','page_level4_icon.jpg','page_level4_list.jpg','page_level5_fail.jpg','page_level5_icon.jpg','page_loading_bg.jpg','page_loading_car.png','page_result_bad_bg.jpg','page_result_great_bg.jpg','page_result_ok_arrow.png','page_result_ok_bg.jpg','page_result_ok_heng.png','page_result_ok_rate0.png','page_share_guide.png','car.png','font.png'];
    for (var i = 0; i < images.length; i++) {
        images[i] = 'img/' + images[i];
    }
    var loaded = 0;
    var toload = images.length;
    for (var i = 0; i < images.length; i++) {
    		var img = new Image();
    		img.onload = function () {
    			loaded++;
    			var percent = parseInt(loaded/toload*100);
    			$(".loading_nums").html(percent+'%');
    			$(".loading .car").css({
    				'transform':'translateX('+(-percent/100*800)+'px)',	
//              transition:"all 1s linear"
    			})
    			if (loaded == toload) {
    				loading.hide();
    				main.show();
    			}
    		}
    		img.src = images[i];
    }

     var timer = null;    
    
    main.children(".page_oneBtn").on("touchstart",function () {
    	    main.hide();
    	    level1.show();
    	    games();
    })

    function change (page) {
    		clearInterval(timer);
    		timer = setTimeout(function () {
    		page.find(".defeat").hide();
    		page.find(".success").hide();
    		page.hide();
    		page.next().show();
    		clearAll(page);
    		},2000)
    }
    function numsChange (nums) {
		if (nums<=2) {
			$(".res_one").show();
		}else if (nums ==3 || nums ==4) {
			$(".res_two").show();
		}else if(nums>=5){
			$(".res_three").show();
		}
    }
    function clearAll (page) {
    		page.find(".puzzle_one").show();
    		page.find(".puzzle_two").hide();
    		page.find(".wordsText").css("background","none")		
    }
    function stopAllMusic () {
    		openbtn.hide();
    		bgMusic.pause();
    }
	function games () {
	var arr_one = [4,7];
	var arr_two = [1,0,7];
	var arr_three = [4,1,7];
	var arr_four = [2,7,0,6];
	var arr_five = [4,6,3,0];
	var nums = 0;
    var level1_count = 0;
    var level2_count = 0;
    var level3_count = 0;
    var level4_count = 0;
    var level5_count = 0;
    var count1;
    var count2;
    var count3;
    var count4;
    var arl = [];
	function clickBtn (page,arr,counts,level_num) {
		page.find("li").one('touchstart',function () {
			var n = $(this).index();
			page.find(".wordsText").eq(counts).css({
	    			background: 'url(img/font.png) 0px '+(n+level_num*8)*-121+'px no-repeat',
	    		});
	    		counts++;	    		
	    		for (var i = 0;i<arr.length;i++) {
	    			if (n == arr[i]) {
	    				arl.push(arr[i]);
	    			}
	    		}
	    		if (counts == page.find(".wordsText").length) {
				if (page!=level5) {
						if (arl.toString() == arr.toString()) {
			    				clearTimeout(timer2);
		    	    			var timer2 = setTimeout(function () {
		    	    				page.find(".success").show();
			    	    			change(page); 	    	    			
		    	    			},1200)
		    	    				nums++;
		    	    				arl = [];
			    			}else {
		    	    			clearTimeout(timer2);
		    	    			var timer2 = setTimeout(function () {
		    	    			page.find(".defeat").show();
		    	    			change(page);
		    	    			},1200)
		    	    			page.find(".puzzle_one").hide();
		    	    			page.find(".puzzle_two").show();
		    	    			arl = [];
		    	    		}
				} else{
					if (arl.toString() == arr.toString()) {						
						nums++;
			    			clearTimeout(timer2);
		  	    			var timer2 = setTimeout(function () {	    			
							page.find(".success").show();
				    			clearInterval(timer);
					    		timer = setTimeout(function () {
					    		page.find(".defeat").hide();
					    		page.find(".success").hide();
					    		page.hide();
					    		stopAllMusic();
					    		numsChange(nums);
					    		clearAll(page);
					    		},2000)
			    			},1200)
					}else {
						clearTimeout(timer2);
		  	    			var timer2 = setTimeout(function () {	    			
				    			page.find(".defeat").show();
							clearInterval(timer);
					    		timer = setTimeout(function () {
					    		page.find(".defeat").hide();
					    		page.find(".success").hide();
					    		page.hide();
					    		stopAllMusic();
					    		numsChange(nums);
					    		clearAll(page);
					    		},2000)	    				
			    			},1200)
			    			page.find(".puzzle_one").hide();
		  	    			page.find(".puzzle_two").show();	
					}
				}
	    		}
		})

	}
	clickBtn(level1,arr_one,level1_count,0);
	clickBtn(level2,arr_two,level2_count,1);
	clickBtn(level3,arr_three,level3_count,2);
	clickBtn(level4,arr_four,level4_count,3);
	clickBtn(level5,arr_five,level5_count,4); 
}

$(".btn_one").on("touchstart",function () {
	window.location.href= "http://gsactivity.diditaxi.com.cn/gulfstream/activity/v2/giftpackage/index?g_channel=1c40d771aa39662db4b41b2903cded35";
})

$(".btn_two").on("touchstart",function () {
	$(this).parent().hide();
	bgMusic.play();
	openbtn.show();
	level1.show();
	games();
})
$(".sharef").on("touchstart",function () {
	$(".sharefriends").show();
})
$(".sharefriends").on("touchstart", function () {
	$(this).hide();
})
openbtn.on("touchstart",function () {
	if(open==true){
		bgMusic.play();
		openbtn.css({
			'background':'url("img/btn_open_music.gif") left top no-repeat'
		})
		open = false;
	} else {
		bgMusic.pause();
		openbtn.css({
			'background': 'url("img/btn_close_music.png") left top no-repeat'
		})
		open = true;
	}
})

})