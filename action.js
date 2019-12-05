const core = require('@actions/core')
const axios = require('axios')

;(async function () {
  try {
    const result = await axios({
      url: 'http://129.204.88.19/api/repo-email-feedback',
      method: 'get',
      params: {
        repo: core.getInput('repo'),
        actor: core.getInput('actor'),
        token: core.getInput('token')
      }
    })
    console.log(result.data)
  } catch (error) {
    core.setFailed(error.message)
  }
})()
