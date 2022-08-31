module.exports = (app)=>{
    //definir a resposta para a res '/'
    app.get('/',(req,res)=>{
        res.render('index.ejs')
    })
}