function addressMaker(address) {  
    const newAddress = {  
       city: address.city,  
       state: address.state,  
       country: 'United States'  
    };  
    let {city, state,country}= newAddress;
    console.log(`${city}
     ${state}
      ${country}`);
 }


 let city = 'Toronto';
 let state = 'Ontario';
 let country = 'Canada';
 let address = {city, state, country};
 addressMaker(address);