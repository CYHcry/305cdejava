var TableFilterCtrl = function($scope, $filter){
	$scope.friends = [{
		name: 'Black Coffee', 
		name: 'Black Coffee',
		Pay: '$15'
	}, {
		name: 'White Coffee',
        name: 'White Coffee',		
		Pay: '$15'
	}, {
		name: 'Espresso',
        name: 'Espresso',		
		Pay: '$20'
	}, {
		name: 'Caffè latte',
        name: 'Caffè latte',		
		Pay: '$25'
	}, {
		name: 'Cappuccino',
        name: 'Cappuccino',		
		Pay: '$25'
	}, {
		name: 'American Coffee',
        name: 'American Coffee',		
		Pay: '$20'
	}, {
		name: 'Café Mocha',
        name: 'Café Mocha',		
		Pay: '$30'
	}, {
		name: 'Vietnamese Coffee',
		name: 'Vietnamese Coffee',
		Pay: '$30'
	}, {
		name: 'Irish Coffee', 
		name: 'Irish Coffee',
		Pay: '$30' 
	}, {
		name: 'Frappé coffee',		
		Pay: '$18' 
	}];

	// filter
	// $scope.search = { name: '布' };
	// $filter('filter')($scope.friends, $scope.search, true);
};