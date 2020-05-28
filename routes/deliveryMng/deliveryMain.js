// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable1').DataTable({
	filter	: false,
	paging	: false,
  ordering: false
  });

  $('#dataTable2').DataTable({
	filter	: false,
	paging	: false,
  ordering: false
  });

});
