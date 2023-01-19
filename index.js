import express from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();

const PORT = process.env.PORT;

// Mongo
const MONGO_URL = "mongodb://127.0.0.1";
const client = new MongoClient(MONGO_URL); // dail
await client.connect(); // call
console.log("Mongo is connected !!!");


// Home Page
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

// local database

// const pizzas = [
//     {
//         "id": "1",
//         "pizza": "Zucchini Crust Pizza",
//         "img": "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Zucchini-Crust-Pizza_EXPS_DRDS18_14179_C11_16_1b.jpg",
//         "define": "Crispy crust and shaved parmesan pair beautifully with fresh, marinated zucchini. Plus, it's super easy to make from scratch with this easy no-knead pizza dough!",
//     },
//     {
//         "id": "2",
//         "pizza": "Garden-Fresh Grilled Veggie Pizza",
//         "img": "https://images.pexels.com/photos/8609973/pexels-photo-8609973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         "define": "Loaded with crisp green peppers, fresh-cut onions, mushrooms, ripe black olives, vine-ripened Roma tomatoes, and real cheese made from mozzarella.",
//     },
//     {
//         "id": "3",
//         "pizza": "Pizza Caprese",
//         "img": "https://www.tasteofhome.com/wp-content/uploads/2022/06/Pizza-Caprese_EXPS_TOHJJ22_267330_DR_02_01_7b.jpg?fit=700,1024",
//         "define": "This is a variety of Italian pizza that is traditionally topped with cherry tomatoes, mozzarella di bufala, olive oil, and fresh basil leaves. It provides a great way to use up leftover tomatoes, and some cooks like to finish it off with a drizzle of balsamic reduction on top.",
//     },
//     {
//         "id": "4",
//         "pizza": "Easy Pesto Pizza",
//         "img": "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Easy-Pesto-Pizza_EXPS_TOHAM21_18813_B12_01_4b.jpg",
//         "define": "Spread pesto on pizza crust. Top with tomato, bell pepper, olives, red onion, artichoke hearts, and feta cheese. Bake in the preheated oven until cheese is melted and browned, 8 to 10 minutes.",
//     },
//     {
//         "id": "5",
//         "pizza": "Mozzarella Cornbread Pizza",
//         "img": "https://www.tasteofhome.com/wp-content/uploads/2018/01/exps193029_SD163614B12_02_5b-4.jpg?fit=700,1024",
//         "define": "cornbread pizza with veggies in the crust and everything on top, from pepperoni to leftover ham.",
//     },
//     {
//         "id": "6",
//         "pizza": "Loaded Mexican Pizza",
//         "img": "https://www.tasteofhome.com/wp-content/uploads/2018/01/Loaded-Mexican-Pizza_EXPS_FT21_39441_F_0721_1.jpg?fit=700,1024",
//         "define": "Healthful Mexican-style pizza has such amazing flavor that he actually looks forward to it. Leftovers taste even better the next day.",
//     },
//     {
//         "id": "7",
//         "pizza": "Jerked Chicken Pizza",
//         "img": "https://www.foodandwine.com/thmb/UH79IPSChm0VGjJlOYA6myXUlzE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jerk-chicken-pizza-FT-RECIPE0920-d30868b74c0841879c483c1703cc763f.jpg",
//         "define": "Indulge in the delectable flavours of spicy Jamaican jerk chicken pieces on a creamy pizza that has been cooked to perfection! The term ‘jerk’ refers to a method of cooking in which meat, usually chicken, is spiced and cooked slowly over a grill, yielding a smoky, soft product.",
//     },
//     {
//         "id": "8",
//         "pizza": "Meat Lovers Pizza",
//         "img": "https://emeals-menubuilder.s3.amazonaws.com/v1/recipes/781180/pictures/large_meat-lovers-pizza.jpeg",
//         "define": "This one is sure to be a hit with the crowd! Meat lovers pizza has a nutritious pizza foundation made with millet and tapioca flour, as well as soy milk, and a tantalising tomato sauce, gobs of mozzarella cheese, and a variety of meats such as pepperoni, chicken salami, salami Milano, and prosciutto.",
//     },
//     {
//         "id": "9",
//         "pizza": "Pepperoni Pizza",
//         "img": "https://sipbitego.com/wp-content/uploads/2021/08/Pepperoni-Pizza-Recipe-Sip-Bite-Go.jpg",
//         "define": "At home, make Americas traditional pepperoni pizza! Pepperoni is a bright red, velvety, somewhat smoky salami that is commonly used as a pizza topping in the United States. You will find a fantastic pepperoni pizza recipe that includes a homemade pizza base, tomato sauce, and a delicious topping of mozzarella, parmesan, peperoni, and sun dried tomatoes. This is the ideal pizza to add to your weekend reunion!",
//     },
//     {
//         "id": "10",
//         "pizza": "Classic Chicken Pizza",
//         "img": "https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS.jpg",
//         "define": "Do you want a chicken pizza but are too lazy to make one at home? Find a quick and easy recipe for an aromatic traditional chicken pizza that only takes around 30 minutes to prepare! Get a taste of the juiciness of juicy chicken pieces nestled in gooey cheese pizza with tangy tomato sauce and scorching chilies.",
//     },
//     {
//         "id": "11",
//         "pizza": "Gamberi Pizza",
//         "img": "https://live.staticflickr.com/8525/8635063102_d97508c81f_b.jpg",
//         "define": " This pizza is just what you are looking for! Gamberi is an Italian term that means “shrimp” in English, and it’s one of the country’s most popular pizzas. Sautéed prawns with garlic, mushrooms, and parsley, topped with cheese and sauces, is a delicacy not to be missed!",
//     },
//     {
//         "id": "12",
//         "pizza": "PEPPER BARBECUE CHICKEN",
//         "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/1/FNM_040112-Copy-That-002_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382541346030.jpeg",
//         "define": "A tasty blend of spices, the succulence of chicken, the crispy crusts, and the stringy cheese.",
//     },

// ]

app.get('/pizzo', (request, response) => {
 response.send(pizzas);   
})

app.post('/pizzo', async (request, response) => {
    const data = request.body; 
    const result = await client.db('mobiles-ecom').collection('mobiles').insertMany(data);
    response.send(result);
  })

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
``