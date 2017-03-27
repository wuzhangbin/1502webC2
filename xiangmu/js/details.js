$(function(){
	$(".header a:last").click(function(){
		if($('.display').is(':hidden')){
			$('.display').show(1000)
		}else{
			$(".display").hide(1000)
		}
	})
	/*模特*/
	$('.icon_xiao div').click(function(){
		$(this).addClass('icon_border').siblings().removeClass();
		$('.icon_da').hide().eq($(this).index()).fadeIn();
	})
	/*尺码*/
	$('.top').click(function(){
		if($('.xiala').is(":hidden")){
			$(".xiala").slideDown()
		}else{
			$(".xiala").slideUp()
		}
	
	})
	$(".xiala div").click(function(){
		
		$("ul li").html($(this).html());
		$(".xiala").slideUp()
		
	})
	/*数量(计数)*/
	var i=$(".nums").html();
	var n=$(".kun").html();
//	console.log(n)
		$(".btn_jian").click(function(){
			
				if(i<=0){
					i=0
					
				}else{
					i--
					$(".nums").html(i);
				}
					if(i>=10){
					$(".nums").html(i);
					i--;	
					console.log(i)
					$(".kun").html(n)
					n++
				}
			
			
		})
		$(".btn_jia").click(function(){
//			
//				
//				
//					
//					
					if(i<=10){
					$(".nums").html(i);
					i++;	
					$(".kun").html(n)
					n--
					
				
				
			
			}else{
				
			}
		 })
			
			/*底部滚动*/
	    var num=null;
        $(".click_left").click(function(){
        var b= $(".list li").length;
             
            if(num<b-5){
                num++;
            }else{
                num;
            }
            $(".list").css("left",-num*204+"px")
        });
        $(".click_right").click(function(){
            if(num>0){
                num--;
            }else{
                num;
            }
            $(".list").css("left",-num*204+"px")
        });

			
		})
	

