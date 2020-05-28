// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
	filter	: false,
	paging	: false,
  ordering	: false
  });

  // $('#datepicker').datepicker({
  //     format          : "yyyy-mm-dd",
  //     language        : "kr",
  //     todayHighlight  : true,
  //     todayBtn        : 'linked'
  // });

  $('#datepicker').daterangepicker({
    autoclose: true,
    autoApply: true,
    locale: {
      format: 'YYYY/MM/DD'
      // applyLabel: '확인',
      // cancelLabel: '취소',
    }
  })
});
