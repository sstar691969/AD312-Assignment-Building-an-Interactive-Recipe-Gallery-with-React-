# AD312-Assignment-Building-an-Interactive-Recipe-Gallery-with-React-
Recipe Gallery 


William Anderson


Create an array of Three array images:

Setup and Initial Configuration
Create src/Gallery.jsx.
Define a list of recipe images. Each image should have an id, url, and a description.
Example list:

export const images = [

  { id: 1, url: 'https://example.com/image1.jpg', description: 'Image 1' },

  { id: 2, url: 'https://example.com/image2.jpg', description: 'Image 2' }

];

 Set with useState(0) index to next and previous:
 Gallery Component Logic
Use the useState hook to manage the current index of the displayed image.
Display the image and its description based on the current index in the state.
Navigation: Implement "Next" and "Previous" buttons to navigate through the images. Update the state accordingly.
Requirement: Add boundary checks to prevent navigation beyond the first or last image in the list.
