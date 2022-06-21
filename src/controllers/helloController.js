class HelloController {
    async index(rec, res) {
      return  res.json('Not Find')
    }
}

export default new HelloController()