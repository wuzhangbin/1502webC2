$(function(){
	$(".btn").click(function(){
		var $val=$(".put").val();
		var cityList;
		$(".box").show();
		if($val!=""){
		$.ajax({
			type:"get",
			url:"http://wthrcdn.etouch.cn/weather_mini?city="+$val,
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data)
				if(data.status!=1002){
					 $.each(data,function(i,j){
                            $('.titl').html(j.ganmao);
                            $.each(j.yesterday,function(k,l){
                                $('.news ul').append('<li>'+l+'</li>');
                            });
                            $.each(j.forecast,function(a,b){
                                $.each(b,function(n,m){
                                    $('.news ul').append('<li>'+m+'</li>');
                                });
                            })
                        });
				}
				console.log(data)
//				$.each(cityList, function(a,b) {
//					
//				});
				
			}
		});
		}else{
			
		}
	})
})
	  
        
       