"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HelloController {
    async index(rec, res) {
      return  res.json('Ola muddndo')
    }
}

exports. default = new HelloController()