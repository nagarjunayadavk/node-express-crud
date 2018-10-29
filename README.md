# node-express-crud
This Crud Rest API application using node &  express.
it will save the data in data/data.json file..


rest url's is:
GET - http://localhost:900/products -- it will give All products.
GET - http://localhost:900/products/1 -- it will give product id 1 details.
   example OutPut:
        {
            "name": "P3",
            "cost": 45,
            "desc":"P3 Desc",
            "id": 1
        }
POST - http://localhost:900/products/create -- it will create a product
    example input:
        {
            "name": "P3",
            "cost": 45,
            "desc":"P3 Desc"
        }
PUT - http://localhost:900/products/3 -- it will update product id 3 details.
    example input:
        {
            "name": "P3",
            "cost": 45,
            "desc":"Update P3 Desc"
        }
DELETE - http://localhost:900/products/3 -- it will delete product id 3.