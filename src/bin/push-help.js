import chalk from 'chalk'

export const help = () => {
  process.stdout.write(chalk.green('push <filename>          inline assets and deploy \n'))
  process.stdout.write(chalk.green('push help                show this help\n'))
}

