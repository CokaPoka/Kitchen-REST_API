# API documentation

- [API documentation](#api-documentation)
  - [Gallery methods](#gallery-methods)
    - [Get all photos](#get-all-photos)
    - [Set photo](#set-photo)
    - [Get photo](#get-photo)
    - [Delete photo](#delete-photo)
  - [Ingredients methods](#ingredients-methods)
    - [Get all ingredients](#get-all-ingredients)
    - [Set ingredient](#set-ingredient)
    - [Delete ingredient](#delete-ingredient)
    - [Edit ingredient](#edit-ingredient)
  - [Salad methods](#salad-methods)
    - [Get salads](#get-salads)
    - [Set salad](#set-salad)
    - [Delete salad](#delete-salad)
    - [Edit salad](#edit-salad)

## Gallery methods

### Get all photos

Method: GET

URL: <https://ndesignserver.herokuapp.com/gallery>

Example response:

```json
{
    "count": 2,
    "photos": [
        {
            "_id": "5f46259f1fab123174a142ec",
            "image": "uploads\\15984326711282.jpg",
            "date": "1598432671176",
            "request": {
                "type": "GET",
                "url": "http://localhost:4000/gallery/5f46259f1fab123174a142ec"
            }
        },
        {
            "_id": "5f4625a51fab123174a142ed",
            "image": "uploads\\15984326772773.jpg",
            "date": "1598432677366",
            "request": {
                "type": "GET",
                "url": "http://localhost:4000/gallery/5f4625a51fab123174a142ed"
            }
        }
    ]
}
```

### Login

Method: POST

URL: <https://ndesignserver.herokuapp.com/gallery>

Example request body:

```jpeg
{   
  Content-Disposition: form-data; name="image"
  Content-Type: image/jpeg 
}
```

Example response:

```json
{
    "message": "Added photo successfully",
    "createdPhoto": {
        "_id": "5f550002e12ce70004a7f760",
        "date": "1599406082387",
        "request": {
            "type": "GET",
            "url": "http://localhost:4000/gallery/5f550002e12ce70004a7f760"
        }
    }
}
```
### Get all users

Method: GET

URL: <https://saladbarserver.herokuapp.com/users>

Example response:

```json
{
    "users": [
        {
            "_id": "5ecede07888b4200174d044f",
            "name": "ana",
            "surname": "babic",
            "username": "ana",
            "password": "$2b$10$cVNeiH2ksgQyxsroiQgsRObJJiLej5iq.fXTg9oh3SCiNhAzcv8EC",
            "email": "ana@gmail.com"
        },
        {
            "_id": "5ecedb7e888b4200174d044e",
            "name": "juhu",
            "surname": "juhu",
            "username": "juhu",
            "password": "$2b$10$URaqRKGMiYnBl/StNKFXWOl3/Dd5LGNj9NOxw.chSOF17O0O6neqm",
            "email": "juhu@gmail.com"
        }
    ]
}
```
## Ingredients methods

### Get all ingredients

Method: GET

URL: <https://saladbarserver.herokuapp.com/ingredients>

Example response:

```json
{
    "ingredients": [
        {
            "_id": "5ec8642de6eb260017d3a08e",
            "name": "banana",
            "avatar": "https://images-na.ssl-images-amazon.com/images/I/61fZ%2BYAYGaL._SX425_.jpg",
            "tag": "fruit",
            "calories": 89
        },
        {
            "_id": "5ec86461e6eb260017d3a08f",
            "name": "apple",
            "avatar": "https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg",
            "tag": "fruit",
            "calories": 52
        }
    ]
}
```

### Set ingredient

Method: POST

URL: <https://saladbarserver.herokuapp.com/ingredients>

Example request body:

```json
{   
  "name": "kiwi",
  "avatar": "https://www.greensagro.com/wp-content/uploads/2019/02/Kiwi.png",
  "tag": "fruit",
  "calories": "61"
}
```

Example response:

```json
{
    "message": "Created ingredient successfully",
    "createdIngredient": {
        "_id": "5ecee2b0888b4200174d0450",
        "name": "kiwi",
        "avatar": "https://www.greensagro.com/wp-content/uploads/2019/02/Kiwi.png",
        "tag": "fruit",
        "calories": 61
    }
}
```

### Delete ingredient

Method: DELETE

URL: <https://saladbarserver.herokuapp.com/ingredients/:id>

Example response:

```json
{
    "message": "Ingredient deleted"
}
```

### Edit ingredient

Method: PATCH

URL: <https://saladbarserver.herokuapp.com/ingredients/:id>

Example request body:

```json
{
    "newName": "banana",
    "newAvatar": "https://images.carriercms.com/image/upload/w_500,h_400,c_fill,g_center,q_auto,f_auto/v1543516192/carrier/carrier-global/food/bananas.jpg",
    "newTag": "fruit",
    "newCalories": "89"
}
```

Example response:

```json
{
    "message": "ingredient updated"
}
```

## Salad methods

### Get salads

Method: GET

URL: <https://saladbarserver.herokuapp.com/salads>

Example response:

```json
{
    "salads": [
        {
            "ingredients": [
                {
                    "_id": "5ecbf83b4747e10017702b74",
                    "name": "orange",
                    "avatar": "https://5.imimg.com/data5/TS/KN/MY-3269076/juice-fresh-orange-500x500.jpg",
                    "tag": "fruit",
                    "calories": 49
                },
                {
                    "_id": "5ec86461e6eb260017d3a08f",
                    "name": "apple",
                    "avatar": "https://5.imimg.com/data5/YY/EN/MY-8155364/fresh-apple-500x500.jpg",
                    "tag": "fruit",
                    "calories": 52
                }
            ],
            "_id": "5ecc168da272960017d28fa2",
            "name": "Fruit salad",
            "desc": "Mmmm",
            "totalcalories": 101
        },
        {
            "ingredients": [
                {
                    "_id": "5ecd2b4dbb625c0017a3fee5",
                    "name": "Carrot",
                    "avatar": "https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png",
                    "tag": "vegetable",
                    "calories": 12
                },
                {
                    "_id": "5ecd2ad5bb625c0017a3fee4",
                    "name": "Peas",
                    "avatar": "https://steelehousekitchen.com/wp-content/uploads/2010/08/IMG_1708.jpg",
                    "tag": "vegetable",
                    "calories": 36
                },
                {
                    "_id": "5ecd29b8bb625c0017a3fee2",
                    "name": "Chicken breasts",
                    "avatar": "https://images-na.ssl-images-amazon.com/images/I/719JxkiwTVL._SX679_.jpg",
                    "tag": "meat",
                    "calories": 500
                },
                {
                    "_id": "5ecd2a69bb625c0017a3fee3",
                    "name": "Pasta",
                    "avatar": "https://www.convitis.com/pub/media/amasty/blog/italian-pasta-types.png",
                    "tag": "pasta",
                    "calories": 1000
                }
            ],
            "_id": "5ecd2c00bb625c0017a3fee7",
            "name": "Chicken salad",
            "desc": "Very tasty",
            "totalcalories": 1548
        }
    ]
}
```

### Set salad

Method: POST

URL: <https://saladbarserver.herokuapp.com/salads>

Example request body:

```json
{
            "name": "Fruit salad",
            "ingredients": ["apple", "banana" ],
            "desc": "Very delicious",
            "totalcalories": 101
}
```

Example response:

```json
{
    "message": "Created salad successfully",
    "createdSalad": {
        "_id": "5ecee781888b4200174d0451",
        "name": "Fruit salad",
        "ingredients": [
            "apple",
            "banana"
        ],
        "desc": "Very delicious",
        "totalcalories": 101
    }
}
```


### Delete salad

Method: DELETE

URL: <https://saladbarserver.herokuapp.com/salads/:id>

Example response:

```json
{
    "message": "salad deleted"
}
```

### Edit salad

Method: PATCH

URL: <https://saladbarserver.herokuapp.com/salads/:id>

Example request body:

```json
{
    "newName": "Delicious Fruit Salad",
    "newIngredients": ["kiwi", "banana", "apple"],
    "newDesc": "mmm",
    "newTotalcalories": "189"
}
```

Example response:

```json
{
    "message": "salad updated"
}
```