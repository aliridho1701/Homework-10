const { Game }= require('../models')

class GameController{
    static async getAll(req,res,next){
        try{
            const games = await Game.findAll()
            res.status(200).json(games)
        }catch (error){
            next(error)
        }
    }
    static async getOne(req,res,next){
        try{
            const {id} = req.params

            const games = await Game.findByPk(id)
            if(!games){
                return res.status(404).json({massage: 'Game not found'})
            }
            res.status(200).json(games)
        }catch (error){
            next(error)
        }
    }
    static async create(req,res,next){
        try{
            const {name, developer}= req.body
            const newGames = await Game.create({name, developer})
            res.status(200).json(newGames)
        }catch (error){
            next(error)
        }
    }
    static async update(req,res,next){
        try{
            const {id} = req.params
            const {name, developer}= req.body
            const UpdateGames = await Game.update({name, developer}, {where: {id}})
            res.status(200).json(UpdateGames)
        }catch (error){
            next(error)
        }
    }
    static async delete(req,res,next){
        try{
            const {id}= req.params
            const deleteGame = await Game.destroy({where: {id}})
            res.status(200).json(deleteGame)
        }catch (error){
            next(error)
        }
    }
}

module.exports = GameController