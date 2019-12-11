const core = require('@actions/core')
const axios = require('axios')

;(async function () {
  try {
    const result = await axios({
      url: 'http://129.204.88.19/api/repo-email-feedback/send',
      method: 'get',
      params: {
        username: core.getInput('username'),
        sign: core.getInput('sign'),
        wxpusher: core.getInput('wxpusher'),
        to: core.getInput('to'),
        actor: core.getInput('actor'),
        token: core.getInput('token'),
        template: core.getInput('template'),
        repo: core.getInput('repo')
      }
    })
    console.log(result.data)
  } catch (error) {
    core.setFailed(error.message)
  }
})()
