import fetch from 'node-fetch'

const GIST_URL = 'https://api.github.com/gists'

export async function createGist(indexFile) {

  const body = {
    description: 'deployed with github.com/reimertz/push',
    public: true,
    files: {
      'index.html': {
        content: indexFile
      }
    }
  }

  return fetch(GIST_URL, {
    headers: {
      'User-Agent': 'push'
    },
    method: 'post',
    body: JSON.stringify(body)
  })
  .then(response => {
    return response.json()
  })
  .then(json => {
    const htmlFile = json.files['index.html']
    const rawUrl = htmlFile.raw_url

    return rawUrl
  })
}