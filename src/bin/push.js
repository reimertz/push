import { deploy } from './push-deploy'
import { help } from './push-help'

if (~process.argv.indexOf('help')) {
  help()
}

else if (process.argv.length === 3) {
  const possibleFileName = process.argv[process.argv.length-1]

  deploy(possibleFileName)
}

else {
  help()
}
