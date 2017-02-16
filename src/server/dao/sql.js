/**
 * Created by Administrator on 2017/2/5.
 */

module.exports = {
    food: {
        query:"SELECT food.id,food.`name`,food.diagrams,food.description,food.steps,food.time,food.tempIngredients AS ingredients FROM food WHERE food.id = ?",
        post: "INSERT INTO food (name,cover,diagrams,description,steps) VALUES (?,?,?,?,?)",
        delete: "",
        update: "",
        rookie:"SELECT user_food.id,user_food.uname,user_food.`name`,user_food.cover,`user`.nickname FROM `user` ,user_food WHERE `user`.`name` = user_food.uname ORDER BY user_food.time DESC LIMIT 0, ?",
        recent:"SELECT food.id,food.`name`,food.cover,food.time FROM food ORDER BY food.time DESC LIMIT 0, ?",
        recentHot:"SELECT food.id,food.`name`,food.cover,food.time FROM food ORDER BY food.time ASC LIMIT 0, ?",
        random:"SELECT food.id,food.`name`,food.cover,food.time FROM food ORDER BY RAND() ASC LIMIT ?",
        type:"SELECT food.id,food.`name`,food.cover,food.diagrams,food.description,food.steps,food.time,food.category FROM food WHERE food.category = ? ORDER BY food.time DESC LIMIT 0, ?"
    },
    ingredients: {
        getByName: "SELECT ingredients.id,ingredients.pic,ingredients.`name`,ingredients.category,ingredients.description,ingredients.buySteps FROM ingredients WHERE ingredients.`name` = ?",
        getById:"",
        post: "INSERT INTO food_ingredients (food,ingredients,account) VALUES (?,?,?)",
        delete: "",
        update: "",
        some:"SELECT ingredients.id,ingredients.pic,ingredients.`name`,ingredients.category,ingredients.description,ingredients.buySteps FROM ingredients LIMIT 0, 14"
    },
    news:{
        get:"SELECT articles.id,articles.title,articles.jsonContent,articles.time FROM articles WHERE articles.tempType = ? ORDER BY articles.time DESC LIMIT 0, ?"
    },
    carousel:"SELECT carousel.id,carousel.title,carousel.cover,carousel.time FROM carousel ORDER BY carousel.time DESC LIMIT 0, 6",
    menu:{
        rookie:"SELECT menu.id,menu.`name`,menu.introduce,menu.time,`user`.nickname AS userName FROM menu,`user` WHERE menu.uname = `user`.`name` ORDER BY menu.time DESC LIMIT 0, ?",
        gallery:"SELECT menu.id,menu.`name`,menu.introduce,menu.time,`user`.nickname AS userName FROM menu,`user` WHERE menu.uname = `user`.`name` ORDER BY menu.time DESC LIMIT 0, ?"
    },
    subject:{
        query:"SELECT `subject`.id,`subject`.cover,`subject`.`name`,`subject`.type,`subject`.time FROM `subject` WHERE `subject`.type = ? ORDER BY `subject`.time DESC LIMIT 0, 6"
    },
    article:{
        query:"SELECT articles.id,articles.title,articles.jsonContent,articles.time FROM articles WHERE articles.id = ?"
    }
};