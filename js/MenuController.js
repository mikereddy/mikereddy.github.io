app.controller('PhotoController', ['$scope', function($scope) {
  
  // Appetizer data.
  $scope.appetizers = [
    {
      name: 'Minato Mirai - みなとみらい',
      description: 'Located just 30 minutes from Tokyo, the Minato Mirai area is one of my favorite day trip locations.',
      large: 'img/photography/minatomirai/MinatoMiraiLarge-1.jpg',
      small: 'img/photography/minatomirai/MinatoMiraiSmall-1.jpg'
    },
    {
      name: 'Baked Clams (12)',
      description: 'Seasoned whole little neck clams.',
      price: 10.50
    },
    {
      name: 'Fried Calamari',
      description: 'Golden fried calamari, served with marinara sauce. ',
      price: 9.50
    },
        {
      name: 'Fried Ravioli',
      description: 'Description of the food to make it desireable.',
      price: 5.50
    },
            {
      name: 'Fried Zucchini',
      description: 'Description of the food to make it desireable.',
      price: 5.50
    },
            {
      name: 'Mozzarella Sticks (6)',
      description: 'Description of the food to make it desireable.',
      price: 5.95
    },
            {
      name: 'Buffalo Wings (6)',
      description: 'Description of the food to make it desireable.',
      price: 5.95
    },
            {
      name: 'Mussels Marinara',
      description: 'Prince Edward Island mussels simmered in our delicious marinara sauce. ',
      price: 8.95
    },
            {
      name: 'Chicken Fingers & Fries',
      description: 'Description of the food to make it desireable.',
      price: 7.95
    },
            {
      name: 'Garlic Bread',
      description: 'Description of the food to make it desireable.',
      price: 2.95
    },
            {
      name: 'Garlic Bread Parmigiana',
      description: 'Description of the food to make it desireable.',
      price: 3.95
    },
     {
      name: 'French Fries (S)',
      description: 'Description of the food to make it desireable.',
      price: 2.95
    },
     {
      name: 'French Fries (L)',
      description: 'Description of the food to make it desireable.',
      price: 3.95
    },
     {
      name: 'Garlic Knots (6)',
      description: 'Description of the food to make it desireable.',
      price: 1.95
    },
     {
      name: 'Pinwheels',
      description: 'Description of the food to make it desireable.',
      price: 2.50
    },
     {
      name: 'Pepperoni Bites (3)',
      description: 'Description of the food to make it desireable.',
      price: 1.25
    }
  ];
  
  // Side dish data.
  $scope.sides = [
   {
      name: 'Sauteed Broccoli Rabe',
      description: 'Description of the food to make it desireable.',
      price: 5.95
    },
     {
      name: 'Sauteed Broccoli Florets',
      description: 'Description of the food to make it desireable.',
      price: 3.95
    },
     {
      name: 'Sauteed Spinach',
      description: 'Description of the food to make it desireable.',
      price: 4.95
    },
     {
      name: 'Meatballs or Sausage',
      description: 'Description of the food to make it desireable.',
      price: 4.95
    }
  ];

  // Pizzas and specialty pizza data. 
  $scope.pizzas = [
    {
      name: 'Large Cheese Pizza',
      description: '',
      price: 12.95
    },
    {
      name: 'Extra Large Pizza',
      description: '',
      price: 13.99
    },
        {
      name: 'Sicilian Pizza',
      description: '',
      price: 15.95
    },
        {
      name: '10 Inch Pizzette',
      description: '',
      price: 8.95
    },
        {
      name: 'Gluten Free 10 Inch Pizzette' ,
      description: '',
      price: 8.95
    },

    ];







  
    $scope.specialpizzas = [
    {
      name: 'Stella\'s Special',
      description: 'Sausage, Pepperoni, Meatballs, Peppers, Onions, Mushrooms, & Black Olives',
      price: 19.50
    },
        {
      name: 'Grandma',
      description: 'Thin Crispino Square Pizza with Marinara Sauce, Fresh Mozzarella & Basil',
      price: 16.95
    },
        {
      name: 'Margarita',
      description: 'Fresh Garlic with Fresh Mozzarella & Basil',
      price: 15.95
    },
            {
      name: 'Vegetable',
      description: 'Sauteed Zucchini, Onions, Mushrooms, Roasted peppers, Spinach, Broccoli & Garlic',
      price: 18.95
    },
      {
      name: 'Baked Ziti',
      description: 'Ziti, ricotta & mozzarella cheese.',
      price: 18.50
    },
    {
      name: 'White Pizza',
      description: 'Romano, ricotta and mozzarella cheeses.',
      price: 18.95
    },
        {
      name: 'Broccoli or Spinach',
      description: 'Your choice of sauteed broccoli or spinach with ricotta and mozzarella cheeses.',
      price: 17.95
    },
    {
      name: 'Eggplant Parmigiana',
      description: 'Thin crust pie with sauce, eggplant and mozzarella.',
      price: 18.50
    },
        {
      name: 'Chicken Parmigiana Pizza',
      description: 'Diced chicken cutlet, mozzarella and romano cheeses in our sauce.',
      price: 18.50
    },
        {
      name: 'Chicken & Tomato',
      description: 'Diced chicken cutlet, fresh diced tomato, mozzarella and romano cheeses.',
      price: 19.95
    },
        {
      name: 'Buffalo Chicken Pizza',
      description: 'Our spicy buffalo sauce infused chicken cutlet with mozzarella and bleu cheeses.',
      price: 19.50
    },
        {
      name: 'Chicken Marsala Pizza',
      description: 'Pan fried chicken and mushrooms in a marsala wine sauce with mozzarella cheese.',
      price: 20.95
    },
        {
      name: 'Bruschetta Pizza',
      description: 'Thin crust square pizza topped with marinated fresh tomatos, basil, and onions.',
      price: 18.50
    },
        {
      name: 'Four Seasons',
      description: 'Pizza topped with Marinara Sauce, Ham, Fresh Mozzarella, Olives, Roasted Peppers & Artichokes.',
      price: 18.95
    },
    {
      name: 'Caprese',
      description: 'Marinara sauce Topped with Sliced Tomatoes, Fresh Mozzarella, & Fresh Basil.',
      price: 15.95
    },
        {
      name: 'Salad Pizza',
      description: 'Freshly Chopped Lettuce, Tomatoes, Cucumbers & Onions.',
      price: 15.95
    },
        {
      name: 'Grilled Chicken Caesar Salad Pizza',
      description: 'Freshly Grilled Chicken on top of Romaine Lettuce, Tomatoes, Croutons & Grated Cheese.',
      price: 18.95
    },
        {
      name: 'Chicken Bacon Ranch Pizza',
      description: 'Romano, ricotta and mozzarella cheeses.',
      price: 18.95
    },
        {
      name: 'BBQ Chicken Pizza',
      description: 'Romano, ricotta and mozzarella cheeses.',
      price: 18.95
    },
        {
      name: 'Stuffed Meat Pizza',
      description: 'Pizza Stuffed with Ham, Salami, Pepperoni, Provolone & Mozzarella Cheeses.',
      price: 20.95
    },
        {
      name: 'Italian Sausage Pizza',
      description: 'Italian Sausage Sauteed with Onions, Green Peppers, & Italian Spices.',
      price: 19.95
    },
            {
      name: 'Crispina',
      description: 'Pizza with Sliced Tomatoes, Fresh Mozzarella & Roasted Peppers.',
      price: 18.50
    },
            {
      name: 'Hawaiian Pizza',
      description: 'Pineapple, Ham, Extra Cheese.',
      price: 20.00
    },
            {
      name: 'Old Fashioned Pizza',
      description: 'Upside down Sicilian Pizza with Cheese on the bottom, topped with Our Special Onion & Tomato Sauce.',
      price: 19.50
    },
                {
      name: 'Penne Alla Vodka Pizza',
      description: 'Our Penne alla Vodka topped Pizza.',
      price: 18.50
    },
            {
      name: 'All American Pizza',
      description: 'Our Special Onion Sauce, Ricotta, Romano & Mozzarella Cheeses.',
      price: 17.95
    },
            {
      name: 'Garlic Knot Pizza',
      description: 'Our Delicious Pizza encircled with Garlic Knots.',
      price: 17.95
    }, 
  ];

  // Entree data (Chicken, Veal, Eggplant)
  $scope.entrees = [
    // Chicken entrees. 
    {
      name: 'Chicken Parmigiana',
      description: '',
      price: 11.95
    },
        {
      name: 'Chicken Marsala',
      description: 'Chicken breast sauteed mushrooms in our marsala sauce',
      price: 13.95
    },
        {
      name: 'Chicken Francese',
      description: 'Chicken in a lemon and white wine sauce',
      price: 13.95
    },
    {
      name: 'Chicken Sorrentino',
      description: 'Chicken topped with Eggplant, Prosciutto & Mozzarella in a Light Brown Sauce.',
      price: 14.95
    },
        {
      name: 'Chicken Balsamico',
      description: 'Grilled or Fried Chicken topped with Fresh Tomato, Onions, Basil, Balsamic Vinaigrette on a Bed of Lettuce.',
      price: 13.95
    },
        {
      name: 'Chicken Cacciatore',
      description: 'Chicken, Mushrooms, Black Olives, & Onions in our Marinara Sauce.',
      price: 14.95
    },
        {
      name: 'Chicken Primavera',
      description: 'Chicken Breast Sauteed with Mixed Vegetables in Garlic & Oil.',
      price: 14.95
    },
        {
      name: 'Chicken Piccata',
      description: 'Sauteed with Artichoke Hearts & Capers in a White Wine Sauce.',
      price: 14.95
    },
        {
      name: 'Chicken Marco-Polo',
      description: 'Sauteed with Mushrooms, Plum Tomatoes, Topped with Prosciutto & Fresh Mozzarella in our Marsala Sauce.',
      price: 14.95
    },
        {
      name: 'Chicken Scarpiello',
      description: 'Chicken, Sweet Italian Sausage, Red Potatoes Sauteed with an Infusion of Fresh Rosemary, Garlic and White Wine Sauce.',
      price: 14.95
    },



    // Veal entrees.
    {
      name: 'Veal Parmigiana',
      description: '',
      price: 13.95
    },
    {
      name: 'Veal Marsala',
      description: 'Tender veal sauteed in our delicious marsala sauce.',
      price: 14.95
    },
    {
      name: 'Veal Francese',
      description: 'Tender Veal in a Lemon White Wine Sauce.',
      price: 14.95
    },
        {
      name: 'Veal Sorrentino',
      description: 'Pan Fried Veal Topped with Eggplant, Prosciutto, & Mozzarella in a Light Brown Sauce.',
      price: 15.95
    },
        {
      name: 'Veal Pizzaiola',
      description: 'Veal Sauteed with Mushrooms, Peppers, Onions in our Marinara sauce.',
      price: 15.95
    },






    // Eggplant entrees.
    {
      name: 'Stuffed Eggplant',
      description: 'Layered eddplant stuffed with mushrooms, ham, ricotta, and mozzarella cheeses.',
      price: 12.95
    },
        {
      name: 'Eggplant Parmigiana',
      description: 'Layered eddplant stuffed with mushrooms, ham, ricotta, and mozzarella cheeses.',
      price: 10.95
    },
        {
      name: 'Stuffed Rollatini',
      description: 'Baked Eggplant Stuffed with Ricotta, Mozzarella & Romano Cheeses Topped with Sauce And Mozzarella.',
      price: 12.95
    },




    // Seafood entrees. 
    {
      name: 'Shrimp Fra Diavolo',
      description: 'Shrimp Sauteed in a Spicy Tomato Sauce Served Over Pasta.',
      price: 15.95
    },
    {
      name: 'Pasta Pescatore',
      description: 'Shrimp, Clams, Mussels & Calamari in a Garlic Marinara Sauce Over Linguine.',
      price: 16.95
    },
        {
      name: 'Shrimp Scampi',
      description: 'Butterfly Shrimp Sauteed in an Infusion of Lemon, Garlic & White Wine Sauce.',
      price: 15.95
    },
        {
      name: 'Shrimp Francese',
      description: 'Egg Battered Shrimp in a Lemon & White Wine Sauce.',
      price: 15.95
    },
        {
      name: 'Shrimp Parmigiana',
      description: 'Breaded Shrimp topped with Sauce & Mozzarella.',
      price: 15.95
    }
    ];



  $scope.pastas = [
    // Pasta and baked dishes.
    {
      name: 'Spaghetti with meatballs or sausage',
      description: '',
      price: 9.95
    },
        {
      name: 'Gnocchi Sorrentino',
      description: 'Gnocchi & Marinara Sauce with Melted Fresh Mozzarella',
      price: 14.95
    },
        {
      name: 'Fetituccine Bolognese',
      description: 'Our Famous Meat Sauce Infused with a touch Cream Sauce',
      price: 13.95
    },
        {
      name: 'Lobster Raviolio Zafferano',
      description: 'Lobster Ravioli in a Saffron Cream Sauce',
      price: 14.95
    },
        {
      name: 'Tortellini Alla Panna',
      description: 'Cheese Tortellini with Prosciutto & Peas in a Light Cream Sauce',
      price: 11.95
    },
        {
      name: 'Penne Primavera',
      description: 'Penne with Sauteed Spinach, Mushrooms, Broccoli, Roasted Peppers,& Zucchini in a Garlic Sauce',
      price: 11.00
    },
        {
      name: 'Penne Siciliano',
      description: 'Penne with Plum Tomatoes, Eggplant, Basil, Light Marinara Sauce & Melted Mozzarella',
      price: 11.95
    },
        {
      name: 'Penne Michelangelo',
      description: 'Penne with Grilled Chicken, Onions & Prosciutto in a Light Cream Sauce',
      price: 11.95
    },
        {
      name: 'Penne Caprese',
      description: 'Penne Topped Fresh Mozzarella in Our Tomato Sauce',
      price: 10.95
    },
        {
      name: 'Pasta with broccoli, garlic, & oil',
      description: '',
      price: 9.95
    },
        {
      name: 'Penne broccoli rabe & sausage',
      description: 'Sauteed in Garlic & Oil Sauce',
      price: 10.95
    },
        {
      name: 'Rigatonni Alla Vodka',
      description: 'Rigatoni In Our Delicious Vodka Sauce',
      price: 10.95
    },
        {
      name: 'Penne Fiorentina',
      description: 'Penne with Grilled Chicken, Sauteed Spinach, Roasted Peppers in Pink Sauce',
      price: 11.95
    },
        {
      name: 'Fetituccine Alfredo',
      description: 'Fettuccine in a Light Cream Sauce',
      price: 10.95
    },
        {
      name: 'Linguine with clam sauce',
      description: 'Red or White Sauce',
      price: 11.95
    },
        {
      name: 'Linguine Carbonara',
      description: 'Linguine Sauteed with Bacon, Onions in a Light Cream Sauce',
      price: 10.95
    },
        {
      name: 'Linguini Calamari',
      description: 'Fresh Calamari Sauteed with Garlic in Tomato Sauce',
      price: 11.95
    },
        {
      name: 'Stuffed Rigatoni',
      description: 'Rigatoni Stuffed with Italian Cheeses in Our Vodka sauce',
      price: 12.95
    },
        {
      name: 'Linguini with Mussels',
      description: '',
      price: 12.95
    },
        {
      name: 'Penne Contadina',
      description: 'Penne with Chicken, Sauteed Peas, Mushrooms, Onions in a Creamy Pink Sauce',
      price: 13.95
    },
            {
      name: 'Penne with Meat Sauce',
      description: '',
      price: 10.95
    },
            {
      name: 'Penne with Marinara Sauce',
      description: '',
      price: 9.00
    },
            {
      name: 'Penne with Butter',
      description: '',
      price: 7.50
    },
            {
      name: 'Penne with Tomato Sauce',
      description: '',
      price: 7.50
    },
            {
      name: 'Baked Ziti',
      description: '',
      price: 9.95
    },
            {
      name: 'Baked Manicotti',
      description: '',
      price: 9.95
    },
            {
      name: 'Homemade Lasagna',
      description: '',
      price: 10.95
    },
            {
      name: 'Baked Stuffed Shells',
      description: '',
      price: 9.95
    },
            {
      name: 'Baked Cheese Ravioli',
      description: '',
      price: 9.95
    },
                {
      name: 'Baked Tortellini',
      description: '',
      price: 9.95
    }
  ];

  // Hero and wrap data. 
  $scope.heros = [
    {
      name: 'Meatball Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Sausage Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Eggplant Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Chicken Cutlet Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Veal Cutlet Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Shrimp Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Pepper & Egg',
      description: '',
      price: 6.50
    },
        {
      name: 'Potato & Egg',
      description: '',
      price: 6.50
    },
        {
      name: 'Eggplant Parmigiana',
      description: '',
      price: 7.00
    },
        {
      name: 'Sausage & Peppers Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Chicken Vodka Parmigiana',
      description: '',
      price: 6.50
    },
        {
      name: 'Philly Cheese Steak',
      description: 'With onions and cheese.',
      description2: 'With peppers, onions, mushrooms, and cheese.',
      price: 6.50,
      price2: 7.50
    },
        {
      name: 'Philly Cheese Steak',
      description: 'With peppers, onions, mushrooms, and cheese.',
      price: 7.50
    },
        {
      name: 'Italian Hero',
      description: 'Salami, Ham, Pepperoni, Provolone, Lettuce, Tomato',
      price: 6.50
    },
        {
      name: 'Joes\' Special',
      description: 'Grilled Chicken Topped with Fresh Mozzarella & Roasted Peppers',
      price: 7.50
    },
        {
      name: 'Grilled Chicken Hero',
      description: 'Grilled Chicken Topped with Lettuce, Tomato, & Mayo',
      price: 7.50
    },
        {
      name: 'Grilled Chicken Rabe Hero',
      description: 'Chicken Topped with Broccoli Rabe, Fresh Mozzarella Cheese',
      price: 8.50
    }
  ];

  $scope.wraps =[
    {
      name: 'Chicken Caesar Wrap',
      description: 'Grilled Chicken, Romaine Lettuce & Caesar Dressing',
      price: 6.95
    },
        {
      name: 'Italian Wrap',
      description: 'Salami, Ham, Pepperoni, Provolone, Lettuce, Tomato & Italian Dressing',
      price: 6.95
    },
        {
      name: 'BBQ Chicken Wrap',
      description: 'BBQ Seasoned Chicken, Lettuce & Tomato',
      price: 6.95
    },
        {
      name: 'Chicken Bacon Ranch',
      description: 'Chicken Cutlet topped with Bacon, Lettuce & Tomato with Ranch Dressing',
      price: 6.95
    },
        {
      name: 'Angie\'s Wrap',
      description: 'Grilled Chicken topped with Red Onions, Tomatoes, Romaine, & Cheddar Cheese served with your Choice Dressing',
      price: 6.95
    },
        {
      name: 'Chicken Chipotle Wrap',
      description: 'Chicken Cutlet topped with Bacon, Lettuce, Tomato, & Chipotle Sauce',
      price: 6.95
    },
  ];

  $scope.salads =[
    {
      name: 'House Salad',
      description: 'Crisp Lettuce, Tomatoes, Onions, Cucumbers, Olives - Served with your choice of dressing on the side.',
      price: 4.50,
      pricel: 5.50
    },
        {
      name: 'Caesar Salad',
      description: 'Fresh Romaine Lettuce with Seasoned Croutons, Tomatoes, Sprinkled with Imported Parmesan Cheese',
      price: 5.50,
      pricel: 6.50
    },
        {
      name: 'Grilled Chicken Caesar Salad',
      description: 'Marinated Grilled Chicken on top of our Caesar salad.',
      price: 7.50,
      pricel: 8.50
    },
        {
      name: 'Greek Salad',
      description: 'Crisp Lettuce, Tomatoes, Onions, Cucumbers, Olives, & Feta Cheese.',
      price: 5.00,
      pricel: 6.50
    },
        {
      name: 'Antipasto Salad',
      description: 'Lettuce, Tomatoes, Onions, Olives, Salami, Provolone Cheese & Gardeniera.',
      price: 7.50,
      pricel: 8.50
    },
        {
      name: 'Caprese Salad',
      description: 'Fresh Mozzarella topped with Sliced Tomatoes, Roasted Peppers & Basil then Drizzled with Virgin Olive Oil & Balsamic Vinegar.',
      price: 7.50,
      pricel: 7.50
    },
            {
      name: 'Stella\'s Chopped Salad',
      description: 'Mesculin Greens, Grilled Chicken, Artichoke Hearts, Roasted Red Peppers, Tomatoes & Fresh Mozzarella - Served with a Balsamic Vinaigrette dressing.',
      price: 8.75,
      pricel: 8.75
    },
        {
      name: 'Buffalo Chicken Salad',
      description: 'Romaine Lettuce, Carrots, Celery topped with Buffalo Chicken',
      price: 7.50,
      pricel: 8.50
    }
  ];

  $scope.desserts =[
    {
      name: 'Canolies',
      description: '',
      price: 2.95,
    },
        {
      name: 'Cheese Cake',
      description: '',
      price: 2.95,
    }
  ];

  $scope.soups =[
    {
      name: 'Pasta Fagiole',
      description: '',
      price: 4.60,
    },
        {
      name: 'Chicken',
      description: '',
      price: 4.60,
    },
        {
      name: 'Tortellini Al Brodo',
      description: 'Chicken tortellini in chicken broth.',
      price: 4.60,
    },
        {
      name: 'Minestrone',
      description: '',
      price: 4.60,
    },
        {
      name: 'Lentil',
      description: '',
      price: 4.60,
    },
        {
      name: 'Spinach',
      description: '',
      price: 4.60,
    }
  ];

}]);