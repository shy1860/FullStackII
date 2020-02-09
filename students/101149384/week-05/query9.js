//NATHALIA SILVA
// 101149384


db.getCollection('Restaurants').find(
{ $and: [ {"cuisine": { $in: ["Bakery","Chicken","Hamburgers","American"]}}, { "city": { $ne: "Brooklyn"}}, {"restaurant_id": {$gt: 4000000}}]},
{ "_id": 0, "cuisines": 1, "name": 1, "city": 1, "restaurant_id": 1}
).sort({restaurant_id: -1})
