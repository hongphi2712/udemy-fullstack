const getHomepage = (req, res) => {
    return res.render('home.ejs')
}
const getLogin = (req, res) => {
    return res.render('login.ejs')
}
const getCategory = (req,res) =>
{
    return res.render('category.ejs')
}
module.exports = {
    getHomepage,getLogin,getCategory
}