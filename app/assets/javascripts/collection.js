$(document).ready(function(){

	$('ul.sort_list').sortable({

		update: function(e,u){

		 item_id = $(u.item).attr('id')
		 item_pos =  $(u.offset).attr('top')

		 $.post('/collection/sort',$(this).sortable('serialize'),function(data){


		 });

		 


		}
	})


})