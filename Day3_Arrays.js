
function getSecondLargest(nums) {
	let first = nums[0];
	let second;
	for (var i = 0; i < nums.length; i++) {
		if(nums[i]>first){
			second=first;
			first=nums[i]
		}

		if (nums[i]>second && nums[i] < first) {
			second = nums[i];
		}
	}
	return second;
}
