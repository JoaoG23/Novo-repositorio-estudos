const sharp = require('sharp');
const compress_images = require('compress-images');
const fs = require('fs');
const { Console } = require('console');

let path = process.argv[2]
let width = Number(process.argv[3]);

console.log(path, width);

function resize(pathInput, outputPath, width) {
    sharp(pathInput).resize({ width: width }).toFile(outputPath, (err) => {
        if (err) {
            console.log("Erro no Tratamento de Imagens! :", err);
        } else {
            console.log("Imagem Redimencionada  com sucesso!");
            compress(outputPath,"./compress/");
        }
    })

}
function compress(pathInput, outputPath) {

    compress_images(pathInput, outputPath, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },

        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");
        }
    );
        fs.unlink(pathInput, (err) =>{
            if(err) {
                console.log(err);
            } else {

                console.log(pathInput," Deletado com Sucesso");
            }


        });
}

resize(path,'./temp/images_outInput.png',width);