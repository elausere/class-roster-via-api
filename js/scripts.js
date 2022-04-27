// // My Scripts


// Data source
const url = "https://v1.nocodeapi.com/pmanikoth/webflow/wtzODovSIJsRXhZg";

// Get data
fetch(url)
  .then( response => response.json() )
  .then( data  => {
    // check-check
    console.log(data.items[0].image.url);
    
    // Get Parent
    const roster = document.querySelector('main');
     
    // Loop through each item
    data.items.forEach( ( student ) => {
      
     const template = `
     <figure>
        <img src="${student.image.url}" alt="Student Image"  
        <figcaption>${student.name}</figcaption>
     </figure>
     `;
     // Dynamicaly insert into the DOM
      roster.insertAdjacentHTML('afterbegin', template);

    });
  });

