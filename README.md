
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
*Landing Page/ Home page

![1](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/7910578d-ff68-4f10-94f9-8142678155d9)
![2](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/c48a2901-a8e1-4adc-8e15-a87756766a76)
![3](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/3d811646-c72b-4e91-a6a8-8510a1df8b4e)

*Products page with filters, sort and search functionality

![4](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/3ecc0b89-7296-451a-9953-76a85f376575)

*Contact page having form with validations

![6](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/3fd87a4b-4916-4d1e-8c8b-8b70fc58bc20)
bd-47e1-adc5-3bf5a89d0ba5)


*Cart


![7](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/aaf44c0c-f2dd-4bf2-8127-5c58a4d0f1b9)

*login / logout using Auth0

![8](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/13d972d4-1551-42af-a417-9bcf3541d2ac)

*Responsive pages

![10](https://github.com/SOURABHDESAI98/Shopaholic-E-commerce-Website/assets/134591383/675ea4e4-30b4-49e2-b990-a8f1a93ebf01)
4561-88c9-4c254476370c)




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


