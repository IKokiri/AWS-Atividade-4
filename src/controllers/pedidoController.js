exports.get = (req, res, next) => {
    res.status(200).send('Todos os pedidos do usuário logado retornados!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('pedido especifico retornado!');
};



exports.post = (req, res, next) => {
    res.status(201).send('Pedido inserido com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Pedido alterado com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Pedido removido com sucesso! ${id}`);
};