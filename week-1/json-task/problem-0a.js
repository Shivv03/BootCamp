// Playing with JSON object"s Values:
let cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
    {
    name: "bar",
    activities: ["be grumpy", "eat bread omblet"],
    weight: 8,
    furcolor: "white"
    }, 
    {
    name: "foo",
    activities: ["sleep", "pre-sleep naps"],
    weight: 3
    }
    ]
}

//basic tasks to play with json

//	1).	Add height and weight to Fluffy
	cat.height = "1 ft";
	cat.weight = "10 kg";

//	2).	Fluffy name is spelled wrongly. Update it to Fluffyy
	cat.name = "Fluffyy";
	
	
//	3).	List all the activities of Fluffyy’s catFriends.
	for(let catFriend of cat.catFriends){
		console.log("activities =>"+catFriend.activities.join(","));
	}
	
//	4).	Print the catFriends names.
	for(let catFriend of cat.catFriends){
		console.log("name => "+catFriend.name);
	}

//	5). Print the total weight of catFriends
//	6).	Print the total activities of all cats (op:6)
	let totalWeight = 0;
	let totalActivities = [];
	for(let catFriend of cat.catFriends){
		totalWeight+=catFriend.weight;
		totalActivities = totalActivities.concat(catFriend.activities);
	}
	console.log("totalWeight => "+totalWeight)
	console.log(totalActivities.join(","))

//	7).	Add 2 more activities to bar & foo cats
//	8).	Update the fur color of bar
	for(let catFriend of cat.catFriends){
    catFriend.activities.push("drink water");
    catFriend.activities.push("be lazy");
		if(catFriend.name === "bar"){
			catFriend.furcolor = "black";
		}
	}
