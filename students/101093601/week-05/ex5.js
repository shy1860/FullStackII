db.getCollection("Restaurants")
.find(
    { "address.building": {$eq: "1008" }},
    { "restaurant_id": 1, "address.street": 1, "name": 1, "city": 1 })
.sort(
    { "restaurant_id": 1 });


db.getCollection("Restaurants")
.find(
    { $or : [ 
        {"name": /Thai/ },
        {"address.street": /Street/ },
        {"address.zipcode": {$eq: "17988" }}]},
    { "restaurant_id": 1, "address": 1, "name": 1, "city": 1 });
