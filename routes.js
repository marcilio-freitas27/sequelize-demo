const Router = require('express');
const resource = require('./models/resourcesModel');
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});
router.post('/insere', resource.createData);
router.get('/busca', resource.selectData);
router.delete('/deleta/:id', resource.deleteData);
router.put('/atualiza/:id', resource.updateData);
router.get('/diferenca', resource.differenceDate);

module.exports = router;