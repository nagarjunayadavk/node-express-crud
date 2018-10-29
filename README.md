# node-express-crud
This Crud Rest API application using node &  express. <br>
it will save the data in data/data.json file..

<br><br>
<b>REST url's is:</b>
<br><br>
<b>GET</b> - http://localhost:900/products -- it will give All products.
<br><br><br>
<b>GET</b> - http://localhost:900/products/1 -- it will give product id 1 details.
<br>
   example OutPut:
        {
            "name": "P3",
            "cost": 45,
            "desc":"P3 Desc",
            "id": 1
        }
<br><br><br>
<b>POST</b> - http://localhost:900/products/create -- it will create a product
<br>
    example input:
        {
            "name": "P3",
            "cost": 45,
            "desc":"P3 Desc"
        }
<br><br><br>
<b>PUT</b> - http://localhost:900/products/3 -- it will update product id 3 details.
<br>
    example input:
        {
            "name": "P3",
            "cost": 45,
            "desc":"Update P3 Desc"
        }
<br><br><br>
<b>DELETE</b> - http://localhost:900/products/3 -- it will delete product id 3.