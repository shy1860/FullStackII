//NATHALIA SILVA
// 101149384


db.getCollection('Restaurants').find(
{ "cuisine": "Japanese" },
{ "cuisine":1, "name":1}
)