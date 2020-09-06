# API documentation

- [API documentation](#api-documentation)
  - [Gallery methods](#gallery-methods)
    - [Get all photos](#get-all-photos)
    - [Set photo](#set-photo)
    - [Get photo](#get-photo)
    - [Delete photo](#delete-photo)

## Gallery methods

### Get all photos

Method: GET

URL: <https://ndesignserver.herokuapp.com/gallery>

Example response:

```json
{
    "count": 1,
    "photos": [
       {
            "_id": "5f5502f54d20970004bae9a8",
            "image": "uploads/1599406837132coka.jpg",
            "date": "1599406837723",
            "request": {
                "type": "GET",
                "url": "https://ndesignserver.herokuapp.com/gallery/5f5502f54d20970004bae9a8"
            }
        }
    ]
}
```

### Set photo

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
        "_id": "5f5502f54d20970004bae9a8",
        "date": "1599406837723",
        "request": {
            "type": "GET",
            "url": "https://ndesignserver.herokuapp.com/gallery/5f5502f54d20970004bae9a8"
        }
    }
}
```
### Get photo

Method: GET

URL: <https://ndesignserver.herokuapp.com/gallery/:id>

Example response:

```json
{
    "photo": {
        "_id": "5f5502f54d20970004bae9a8",
        "image": "uploads/1599406837132coka.jpg"
    }
}
```
### Delete photo

Method: DELETE

URL: <https://ndesignserver.herokuapp.com/gallery/:id>

Example response:

```json
{
    "message": "Photo deleted"
}
```

