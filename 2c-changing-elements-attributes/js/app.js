document.getElementById('changeAttrBtn').onclick = function() {
    const myImage = document.getElementById('myImage');
    const altText = document.getElementById('altText');
    
    // Array of different Picsum categories (not used, but keeping for structure)
    const imageCategories = [
        'nature',
        'city',
        'animals',
        'food',
        'architecture',
        'technology'
    ];
    
    // Get random category (not used for Picsum, but keeping for alt text)
    const randomCategory = imageCategories[Math.floor(Math.random() * imageCategories.length)];
    
    // Update image source with Picsum Photos and a random query to force refresh
    myImage.src = `https://picsum.photos/100/100?random=${Math.random()}`;
    
    // Update alt text to match the category
    myImage.alt = `New ${randomCategory} image`;
    altText.textContent = myImage.alt;
};
  