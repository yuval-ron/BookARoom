npm run build
sed -i 's/\/BookARoom\/static/static/g' build/index.html
sed -i 's/\/BookARoom\/favico.ico/favico.ico/g' build/index.html
sed -i 's/\/BookARoom\/manifest.json/manifest.json/g' build/index.html
npm run deploy
