const Router = require('koa-router'),
      router = new Router(),
      userModel = require('../model/userModel');

router.get('/', async (ctx) => {
    ctx.body = await userModel.find({})
});

router.get('/:id', async (ctx) => {
    ctx.body = await userModel.findById(ctx.params.id)
});

router.post('/', async (ctx) => {
    ctx.body = await new userModel(ctx.request.body).save()
});

router.delete('/:id', async (ctx) => {
    ctx.body = await userModel.findByIdAndRemove(ctx.params.id)
});

module.exports = router;