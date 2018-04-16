cd ~/Sipios/bitcoin-forma/front
yarn build
scp -r -p ~/Sipios/bitcoin-forma/front/build/* ubuntu@ec2-35-180-43-100.eu-west-3.compute.amazonaws.com:/var/www/html/
