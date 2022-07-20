$('#myModal').on('shown.bs.modal', function() {
  $('.input-group.date').datepicker({
    format: "dd/mm/yyyy",
    startDate: "01-01-2015",
    endDate: "01-01-2020",
    todayBtn: "linked",
    autoclose: true,
    todayHighlight: true,
    container: '#myModal modal-body'
  });
});

$("[id=add]").click(function() {
  $("#myModal .modal-header h4").html("Request for Change");
  $("#myModal .modal-body").html('<form class="form-horizontal" role="form"><br /><br /><label class="col-sm-2 control-label">Date Required</label><div class="col-sm-3"><div class="input-group date col-sm-8"><input type="text" class="form-control" id="DateRequired"><span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span></div></div></form>');
  $("#myModal").modal("show");
});