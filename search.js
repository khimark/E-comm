// Add event listener to the search button
document.getElementById('search-btn').addEventListener('click', function() {
    // Get the search query from the text input
    const searchQuery = document.getElementById('search-input').value;
   
    // Check if the search query is not empty
    if (searchQuery) {
       // Perform the search operation
       searchProducts(searchQuery);
    } else {
       alert('Please enter a search query');
    }
   });
   
   function searchProducts(query) {
    // Add your logic to search for products based on the query
    // For example, you can send a request to your server with the query and fetch the relevant products
    // If the products are already loaded in the browser, you can filter them based on the query
   }
   
   // Mock Data
   let products = [
       { id: 1, name: 'Product 1',category: 'Shirt', rating: 4 },
       { id: 2, name: 'Product 2',category: 'Bags', rating: 3 },
       { id: 3, name: 'Product 3',category: 'Shirt', rating: 5 },
       { id: 4, name: 'Product 4',category: 'Shoe', rating: 4 },
       { id: 5, name: 'Product 5',category: 'Shirt', rating: 4 },
   ];
   
   // Function to search products by name or category or rating
   function searchProducts(searchTerm) {
       return products.filter(product =>
           product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||           
           product.rating.toString().includes(searchTerm)
       );
   }
   
   // Function to filter products by category or rating
   function filterProducts(filterTerm) {
       if (filterTerm === 'Bags') {
           return products.filter(product => product.category === 'Bags');
       } else if (filterTerm === 'Shirt') {
           return products.filter(product => product.category === 'Shirt');
       } else if (filterTerm === 'Shoe') {
           return products.filter(product => product.category === 'Shoe');
       } else if (!isNaN(filterTerm)) {
           let rating = parseFloat(filterTerm);
           return products.filter(product => product.rating === rating);
       }
   }
   
   // Call the function to search products or filter results
   console.log(searchProducts('Product 1'));
   console.log(filterProducts('Bags'));