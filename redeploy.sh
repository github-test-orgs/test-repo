echo "REACH"
git reset --hard
git pull origin master
npm i
npm run build
sudo lsof -ti tcp:3000 | xargs sudo kill -9 # Kills process on port 3000
npm run dev