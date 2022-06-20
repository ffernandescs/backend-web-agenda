class HelloController {
    async index(rec, res) {
      return  res.json('Ola muddndo')
    }
}

export default new HelloController()