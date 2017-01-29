var app = angular.module('junApp', []);
app.controller('formCtrl', function($scope) {

    $scope.tableNameLabel = "Table Name*";
    $scope.tableNameReqMsg = "Table Name is required";
    $scope.startTimeLabel = "Start Time*";
    $scope.startTimeReqMsg = "Start Time >= 0 is required";
    $scope.endTimeLabel = "End Time*";
    $scope.endTimeReqMsg = "End Time >=0 is Required";
    $scope.wrongRangeMsg = "Enter End time greater than or equal to Start time";  
    $scope.sourceVnLabel = "Source_Vn*";
    $scope.sourceVnReqMsg = "Select Source_Vn";
    $scope.sourceVNOperatorReqMsg = "Select Operator for Source_Vn";
    $scope.sourcePortLabel = "Source_Port*";
    $scope.sourcePortReqMsg = "Select Source_Port";
    $scope.sourcePortOperatorReqMsg = "Select Operator for Source_Port";
    $scope.destinationVnLabel = "Destination_Vn*";
    $scope.destinationVnReqMsg = "Select Destination_Vn";
    $scope.destinationVnOperatorReqMsg = "Select Operator for Destination_Vn";
    $scope.destinationPortLabel = "Destination_Port*";
    $scope.destinationPortReqMsg = "Select Destination_Port";
    $scope.destinationPortOperatorReqMsg = "Select Operator for Destination_Port";
    $scope.operatorLabel = "Operator*";

    $scope.sourceVN = ['FrontEnd_VN','FrontEnd_VN_1','FrontEnd_VN_2'];
    $scope.destinationVN = ['BackEnd_VN','BackEnd_VN_1','BackEnd_VN_2'];
    $scope.sourcePort = ['9000','8000','7000'];
    $scope.destinationPort = ['9001','8001','7001'];
    $scope.operators = ['=','!='];

    $scope.checkTime = function() {
	if($scope.startTime && $scope.endTime){
		if($scope.startTime > $scope.endTime){
			$scope.wrongRange = true;
		}
		else{
			$scope.wrongRange = false;
		}
	}

    };   

    $scope.submit = function() {
	$scope.displayQuery=true;	
	$scope.jsonQuery = {
	"table_name": $scope.tableName,
	"start_time": $scope.startTime,
	"end_time": $scope.endTime,
	"select_fields": ["time", "source_vn", "destination_vn", "source_port",
	"destination_port", "traffic"],
	"where_clause": [
	[{
		"name": "source_vn",
		"value": $scope.source_vn,
		"operator": $scope.operator_source_vn
	}, {
		"name": " source_port",
		"value": $scope.source_port,
		"operator": $scope.operator_source_port
	}],
	[{
		"name": " destination_vn",
		"value": $scope.destination_vn,
		"operator": $scope.operator_destination_vn
	},{
		"name": " destination_port",
		"value": $scope.destination_port,
		"operator": $scope.operator_destination_port
	}]
	]
       };
    }


    $scope.reset = function() {
	location.reload();
    };

});