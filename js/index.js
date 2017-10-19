$(function () {
	var loading = $(".loading");
	var main = $(".page_zero");
	var level1 = $(".page_one");
	var level2 = $(".page_two");
	var level3 = $(".page_three");
	var level4 = $(".page_four");
	var level5 = $(".page_five");
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
    			console.log(loaded);
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
	function games () {
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

    level1.find("li").one('touchstart',function () {
    		var n = $(this).index();
    		level1.find(".wordsText").eq(level1_count).css({
    			background: 'url(img/font.png) 0px '+n*-120+'px no-repeat',
    		});
    		level1_count++;
    		if (n == 4) {
    			count1 = 4;
    		}	
    	    if (n == 7 && count1 ==4) {
    	    		count2 =7;
    	    }
    	    if (level1_count == $(".page_one .wordsText").length) {
    	    		if (count1 == 4 && count2 == 7) {
    	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {
    	    				$(".page_one .success").show();
	    	    			change(level1); 	    	    			
    	    			},1200)
    	    				nums++;
    	    				
    	    		}else {
    	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {
    	    			$(".page_one .defeat").show();
    	    			change(level1);
    	    			},1200)
    	    			level1.find(".puzzle_one").hide();
    	    			level1.find(".puzzle_two").show();
    	    		}
    	    }
    })
    level2.find("li").one('touchstart',function () {
    		clearAll(level1);
		var n = $(this).index();
		$(".page_two .wordsText").eq(level2_count).css({
			background: 'url(img/font.png) 0px '+(n+8)*-121+'px no-repeat',
		});
		level2_count++;
		if (n == 1) {
			count1 = 1;
		}
	    if (count1 == 1 && n == 0) {
	    		count2 =0;
	    }
	     if (count1 == 1 && count2 == 0 && n ==7) {
	    		count3 =7;
	    }
	    if (level2_count == $(".page_two .wordsText").length) {
	    		if (count1 == 1 && count2 == 0 && count3 == 7) {
	    			console.log(1);
	    			nums++;
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
	    			$(".page_two .success").show();
	    			change(level2);
    	    			},1200)
	    			
	    		}else {
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
	    			$(".page_two .defeat").show(); 
	    			change(level2);
	    			},1200)
	    			level2.find(".puzzle_one").hide();
    	    			level2.find(".puzzle_two").show();
	    		}
	    }
})
    level3.find("li").one('touchstart',function () {
    		clearAll(level2);
		var n = $(this).index();
		$(".page_three .wordsText").eq(level3_count).css({
			background: 'url(img/font.png) 0px '+(n+16)*-121+'px no-repeat',
		});
		level3_count++;
		if (n == 4) {
			count1 = 4;
		}
	    if (count1 == 4 && n == 1) {
	    		count2 =1;
	    }
	     if (count1 == 1 && count2 == 0 && n ==7) {
	    		count3 =7;
	    }
	    if (level3_count == $(".page_three .wordsText").length) {
	    		if (count1 == 4 && count2 == 1 && count3 == 7) {
	    			console.log(1);
	    			nums++;
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
	    			$(".page_three .success").show();
	    			change(level3);
	    			},1200)
	    		}else {
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
	    			$(".page_three .defeat").show();
	    			change(level3);
	    			},1200)
	    			level3.find(".puzzle_one").hide();
    	    			level3.find(".puzzle_two").show();
	    		}
	    }
})
    level4.find("li").one('touchstart',function () {
    		clearAll(level3);
		var n = $(this).index();
		$(".page_four .wordsText").eq(level4_count).css({
			background: 'url(img/font.png) 0px '+(n+24)*-121+'px no-repeat',
		});
		level4_count++;
		if (n == 2) {
			count1 = 2;
		}
	    if (count1 == 2 && n == 7) {
	    		count2 =7;
	    }
	     if (count1 == 2 && count2 == 7 && n == 0) {
	    		count3 =0;
	    }
	     if (count1 == 2 && count2 == 7 && count3 == 0 && n == 6) {
	    		count4 =6;
	    }
	    if (level4_count == $(".page_four .wordsText").length) {
	    		if (count1 == 2 && count2 == 7 && count3 == 0 && count4 == 6) {
	    			console.log(1);
	    			nums++;
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
	    			$(".page_four .success").show();
	    			change(level4);
	    			},1200)
	    		}else {
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
	    			$(".page_four .defeat").show();
	    			change(level4);
	    			},1200)
	    			level4.find(".puzzle_one").hide();
    	    			level4.find(".puzzle_two").show();
	    		}
	    }
}) 
    level5.find("li").one('touchstart',function () {
    		clearAll(level4);
		var n = $(this).index();
		$(".page_five .wordsText").eq(level5_count).css({
			background: 'url(img/font.png) 0px '+(n+32)*-121+'px no-repeat',
		});
		level5_count++;
		if (n == 4) {
			count1 = 4;
		}
	    if (count1 == 4 && n == 6) {
	    		count2 =6;
	    }
	     if (count1 == 4 && count2 == 6 && n == 3) {
	    		count3 =3;
	    }
	     if (count1 == 4 && count2 == 6 && count3 == 3 && n == 0) {
	    		count4 =0;
	    }
	    if (level5_count == $(".page_five .wordsText").length) {
	    		if (count1 == 4 && count2 == 6 && count3 == 3 && count4 == 0) {
	    			nums++;
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
					$(".page_five .success").show();
		    			clearInterval(timer);
			    		timer = setTimeout(function () {
			    		level5.find(".defeat").hide();
			    		level5.find(".success").hide();
			    		level5.hide();
			    		numsChange(nums);
			    		clearAll(level5);
			    		},2000)
	    			},1200)
	    			
	    		}else {
	    			clearTimeout(timer2);
    	    			var timer2 = setTimeout(function () {	    			
		    			$(".page_five .defeat").show();
					clearInterval(timer);
			    		timer = setTimeout(function () {
			    		level5.find(".defeat").hide();
			    		level5.find(".success").hide();
			    		level5.hide();
			    		numsChange(nums);
			    		clearAll(level5);
			    		},2000)	    				
	    			},1200)
	    			level5.find(".puzzle_one").hide();
    	    			level5.find(".puzzle_two").show();	    			
	    		}
	    }
}) 
		
}
	

$(".btn_one").on("touchstart",function () {
	window.location.href= "http://gsactivity.diditaxi.com.cn/gulfstream/activity/v2/giftpackage/index?g_channel=1c40d771aa39662db4b41b2903cded35";
})

$(".btn_two").on("touchstart",function () {
	$(this).parent().hide();
	level1.show();
	games();
})
var openbtn = $(".btn_open_music");
var bgMusic = $("#bgMusic").get(0);
var open = false;
//var closebtn = $(".btn_close_music");
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