db.getCollection('Restaurants').find()

// Exercise 2
db.getCollection('Restaurants').find(
    {"cuisine":{$eq:"Japanese"}},
    {"_id":1,"cuisine":1,"name":1,"city":1,"restaurant_id":1}
    )
    .sort({"restaurant_id":1})


// Exercise 3
db.getCollection('Restaurants').find(
    { $and: [ {"cuisine":{$eq:"Delicatessen"}},
       {"city": {$ne:"Brooklyn"}} ]},
    {"_id":0,"city":1,"cuisine":1,"name":1}
    )
    .sort({"name":1})


// Exercise 4: Multiple Operators
db.getCollection('Restaurants').find(
    {$and: [ {"cuisine": { $in: ["Bakery","Chicken","Hamburgers","American"]}},
    {"city": {$ne: "Brooklyn"}},
    {"restaurant_id": {$gt: "40000000"}} ]},
    {"_id":0,"city":1,"cuisine":1,"name":1,"restaurant_id":1}
    )
    .sort({"name":1})

// Exercise 5: Filtering on Array Columns
db.getCollection('Restaurants').find(
    {$or: [ {"name":  {$regex: /Thai/i } },
    {"address.street": {$regex: /Street/i}},
    {"address.zipcode": {$eq: "17988"}} ]},
    {"restaurant_id":1,"address.street":1,"name":1,"city":1}
    )
    .sort({"restaurant_id":1})