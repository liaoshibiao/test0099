
 $("#nav li").bind("click",function() {
		data_id = $(this).attr("data-id");
				$("#nav li").removeClass('active');
				$("#nav li[data-id = '" + data_id + "']").addClass('active');
					let index = $(this).index() + 1;
					var m = "";
					
					if(index==1){
						
							m = 1;
							
					}
					else if(index==2){ 
						
						m = 2;
						
						
					}
					else if(index==3){ 
						
						m = 3;
						
					}
					else if(index==4){ 
						
						m = 4;
						
					}
					else if(index==5){ 
					
						m = 5;
						
					}
					else if(index==6){ 
						m = 6;
					}
				
				})



