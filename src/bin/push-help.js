import chalk from 'chalk'

export const help = () => {
  process.stdout.write(chalk.green('◴ push <filename>          deploy <filename>  \n'))
  process.stdout.write(chalk.green('◴ push help                show this help\n'))
}

