import fs from 'fs'
import path from 'path'
import crypto from 'crypto'
import pkg from 'webpack'
const { Compilation } = pkg

let isFirstRun = true

class GenerateAssetManifestPlugin {
   constructor(options) {
      this.action = options.action || 'create'
      this.ignoreFiles = options.ignore || [] // Приймаємо масив ігнорованих файлів
   }

   apply(compiler) {
      compiler.hooks.thisCompilation.tap('GenerateAssetManifestPlugin', (compilation) => {
         compilation.hooks.processAssets.tapPromise(
            {
               name: 'GenerateAssetManifestPlugin',
               stage: Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
            },
            async (assets) => {
               const cssFiles = Object.keys(assets)
                  .filter((file) => file.endsWith('.css') && !this.ignoreFiles.includes(path.basename(file)))
               const jsFiles = Object.keys(assets)
                  .filter((file) => file.endsWith('.js') && !this.ignoreFiles.includes(path.basename(file)))

               let phpContent = "<?php\nreturn [\n"
               const fileHashes = {}

               if (this.action === 'clear' && isFirstRun) {
                  const outputPath = path.join('webpack/assets-manifest.php')
                  if (fs.existsSync(outputPath)) {
                     fs.writeFileSync(outputPath, "<?php\nreturn [\n];\n?>")
                     console.log('The assets-manifest.php file is cleared')
                  } else {
                     console.log('Assets-Manifest.php file not found for cleaning')
                  }
                  isFirstRun = false
               } else if (this.action === 'create') {
                  cssFiles.forEach((file) => {
                     const content = assets[file].source()
                     const hash = crypto.createHash('md5').update(content).digest('hex').substr(0, 10)
                     const fileName = path.basename(file)
                     const ext = path.extname(file)
                     const baseName = path.basename(file, ext)

                     const newFileName = `${baseName}.${hash}${ext}`
                     const newFilePath = path.join(path.dirname(file), newFileName)
                     assets[newFilePath] = assets[file]

                     delete assets[file]

                     phpContent += `  '${fileName}' => '${hash}',\n`
                     fileHashes[fileName] = hash
                  })

                  jsFiles.forEach((file) => {
                     const content = assets[file].source()
                     const hash = crypto.createHash('md5').update(content).digest('hex').substr(0, 10)
                     const fileName = path.basename(file)
                     const ext = path.extname(file)
                     const baseName = path.basename(file, ext)

                     const newFileName = `${baseName}.${hash}${ext}`
                     const newFilePath = path.join(path.dirname(file), newFileName)
                     assets[newFilePath] = assets[file]

                     delete assets[file]

                     phpContent += `  '${fileName}' => '${hash}',\n`
                     fileHashes[fileName] = hash
                  })

                  phpContent += "];\n?>"

                  const outputPath = path.join(compiler.outputPath)
                  if (!fs.existsSync(outputPath)) {
                     fs.mkdirSync(outputPath, { recursive: true })
                  }
                  fs.writeFileSync(path.join('webpack/assets-manifest.php'), phpContent)
               }

               return Promise.resolve()
            }
         )
      })
   }
}

export default GenerateAssetManifestPlugin
