import { promises as fs } from 'fs'
import path from 'path'
import ttf2woff2 from 'ttf2woff2'
import { sync as globSync } from 'glob'

async function convertFonts() {
   try {
      const ttfFiles = globSync('./assets/src/fonts/*.ttf')

      // Створення папки для збереження шрифтів, якщо вона не існує
      const outputDir = './assets/dist/fonts/'
      await fs.mkdir(outputDir, { recursive: true })

      for (const ttfFile of ttfFiles) {
         const fileName = path.basename(ttfFile, '.ttf')
         const input = await fs.readFile(ttfFile)
         const output = ttf2woff2(input)
         await fs.writeFile(`${outputDir}${fileName}.woff2`, output)
         console.log(`Font ${fileName}.woff2 successfully converted!`)
      }
   } catch (err) {
      console.error('Font conversion error:', err)
   }
   await fontsStyle()
}

// Feature to create a style file with connected fonts
const fontsStyle = async () => {
   const fontsFile = './assets/src/scss/fonts/fonts.scss'

   try {
      const fontsFiles = await fs.readdir('./assets/src/fonts')
      const fontsFilesScss = '../dist/fonts/'

      if (fontsFiles) {
         let fileContent = ''
         let newFileOnly

         for (let i = 0; i < fontsFiles.length; i++) {
            let fontFileName = fontsFiles[i].split('.')[0]
            if (newFileOnly !== fontFileName) {
               let fontName = fontFileName.split('-')[0]
               let fontStyle = fontFileName.includes('Italic') ? 'italic' : 'normal'

               let fontWeight = 400
               // Определение веса шрифта
               if (fontFileName.includes('Thin') || fontFileName.includes('Hairline')) {
                  fontWeight = 100
               } else if (fontFileName.includes('ExtraLight') || fontFileName.includes('UltraLight')) {
                  fontWeight = 200
               } else if (fontFileName.includes('Light')) {
                  fontWeight = 300
               } else if (fontFileName.includes('Medium')) {
                  fontWeight = 500
               } else if (fontFileName.includes('SemiBold') || fontFileName.includes('DemiBold')) {
                  fontWeight = 600
               } else if (fontFileName.includes('Bold') && !fontFileName.includes('Extra') && !fontFileName.includes('Ultra')) {
                  fontWeight = 700
               } else if (fontFileName.includes('ExtraBold') || fontFileName.includes('UltraBold')) {
                  fontWeight = 800
               } else if (fontFileName.includes('Black') || fontFileName.includes('Heavy')) {
                  fontWeight = 900
               } else if (fontFileName.includes('ExtraBlack') || fontFileName.includes('UltraBlack')) {
                  fontWeight = 950
               }

               fileContent += `
/**
 * ${fontName} font face
 */
@font-face {
   font-family: '${fontName}';
   font-display: swap;
   src: url("${fontsFilesScss}${fontFileName}.woff2") format("woff2");
   font-weight: ${fontWeight};
   font-style: ${fontStyle};
}
               `
               newFileOnly = fontFileName
            }
         }
         await fs.writeFile(fontsFile, fileContent)
         await createFontPreloadPHP()

         console.log('FONTS.SCSS file successfully updated!')
      }
   } catch (err) {
      console.error('Error when creating a styles for fonts:', err)
   }
}

convertFonts()


const createFontPreloadPHP = async () => {
   const fontsDir = './assets/dist/fonts'
   const phpFilePath = './fonts-preload.php'

   try {
      const fontsFiles = await fs.readdir(fontsDir)
      let phpContent = ''

      fontsFiles.forEach(fontFile => {
         if (fontFile.endsWith('.woff2')) {
            const fontName = fontFile.split('.')[0]
            phpContent += `<link rel="preload" href="<?php echo FONTS_DIR ?>/${fontFile}" as="font" type="font/woff2" crossorigin="anonymous" />\n`
         }
      })

      await fs.writeFile(phpFilePath, phpContent)
      console.log('PHP file with font preloads successfully created!')
   } catch (err) {
      console.error('Error creating PHP file:', err)
   }
}
