// // My Scripts


// // Data source
// const url = "https://v1.nocodeapi.com/pmanikoth/webflow/wtzODovSIJsRXhZg";

// // Get data
// fetch(url)
//   .then( response => response.json() )
//   .then( data  => {
//     // check-check
//     console.log(data.items[0].image.url);
    
//     // Get Parent
//     const container = document.querySelector('main');
     
//     // Loop through each item
//     data.forEach( ( item ) => {
      
//      const template = `
//      <figure>
//         <img src=${student.image.url} />  
//         <figcaption>${student}</figcaption>
//      </figure>
//      `
//      // Dynamicaly insert into the DOM
//       container.insertAdjacentHTML('afterbegin', template);

//     });
//   });

// Data source
const url = "https://v1.nocodeapi.com/pmanikoth/webflow/wtzODovSIJsRXhZg";

// Get data
fetch(url)
  .then( response  => response.json())
  .then( data  => {
    // check-check: get one image
    // Note: Webflow returns data in array called `items`
    console.log(data.items[0].image.url);

    // get container for data
    const gallery = document.querySelector(".gallery");

    //
    data.items.forEach( student => {
      
      // template
      const template = `
          <figure>
            <figcaption>Student</figcaption>
            <img src="${student.image.url}" alt="Placeholder" />
          </figure>
       `;

      gallery.insertAdjacentHTML("afterbegin", template);
    });
  });

