const connection = require('../database/connection')


module.exports = {
    async index(req, res) {
        const id = req.headers.authorization

        const incidents = await connection('incidents')
            .where('ong_id', id)
            .select('*')

        return res.json(incidents)
    }
}