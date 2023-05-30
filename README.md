
  Shopaholic


           a responsive web application developed by using React.js, Context api, html, css, bootstrap and javascript.


   it's a clone web app of e-commerce websites like amazon, flipkart, it has almost all features that any normal e-commerce website would provide.


  
![Logo](https://cdn-icons-png.flaticon.com/128/825/825561.png)  SHOPAHOLIC


## 🛠 Skills
React.js, html, css, bootstrap, javascript


## Features

  * react routing to navigate between pages
   * login/logout functionality using Auth0
   * responsive app
   * bootstrap components 
   * fetching of data from context api
   * sorting of fetched data according to name and highest,lowest price
   * filtering products according to companies, categories, colours and price range
   * display of products according to inputs given by user in search bar
   * add to cart, remove cart items, clear cart, change cart amount, calculation of price of all cart items while checking out
   * formik to handle contact form data and yup to validate contact form
   * use of react function components and hooks like useState, useEffect, useContext, useParams and useReducer


## Screenshots



## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#000000](https://via.placeholder.com/10/000000?text=+) Black |
| Example Color | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) White|
| Example Color | ![#FFA500](https://via.placeholder.com/10/FFA500?text=+) Orange|
| Example Color | ![#87CEEB](https://via.placeholder.com/10/87CEEB?text=+) Skyblue|
| Example Color | ![#0000FF](https://via.placeholder.com/10/0000FF?text=+) Blue|
| Example Color | ![#FFFF00](https://via.placeholder.com/10/FFFF00?text=+) Yellow|




## API Reference

#### Get all items

```http
  https://api.pujakaitem.com/api/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | Api key is not Required |

#### Get item

```http
  https://api.pujakaitem.com/api/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


