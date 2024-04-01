sudo git reset --hard
sudo git pull origin master
sudo npm i
sudo npm run build
sudo lsof -ti tcp:3000 | xargs sudo kill -9 # Kills process on port 3000
sudo npm run dev
