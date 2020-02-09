//1
db.getCollection("Restaurants")
.find(
    { "cuisine": {$eq: "Delicatessen"} },
    { "_id": 0, "cuisine": 1, "name": 1, "city": 1 })
.sort(
    { "name": -1 });

//2
db.getCollection("Restaurants")
.find(
    { $and : [ {"cuisine": {$eq: "Delicatessen" }}, {"city": {$ne: "Brooklyn" }}]},
    { "_id": 0, "cuisine": 1, "name": 1, "city": 1 })
.sort(
    { "name": 1 });
