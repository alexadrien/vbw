cd ~/Sipios/bitcoin-forma/back/spring
mvn clean package
scp -r -p ~/Sipios/bitcoin-forma/back/spring/target/backend-0.0.1-SNAPSHOT.jar ubuntu@ec2-35-180-43-100.eu-west-3.compute.amazonaws.com:/home/ubuntu/bitcoinbackend/spring/
scp -r -p ~/Sipios/bitcoin-forma/run/start-spring.sh ubuntu@ec2-35-180-43-100.eu-west-3.compute.amazonaws.com:/home/ubuntu/bitcoinbackend/spring/
# ssh ubuntu@ec2-35-180-43-100.eu-west-3.compute.amazonaws.com "cd bitcoinbackend/docker-bdd && sudo docker-compose up"
# ssh ubuntu@ec2-35-180-43-100.eu-west-3.compute.amazonaws.com "fuser -k -n tcp 8081"
# ssh ubuntu@ec2-35-180-43-100.eu-west-3.compute.amazonaws.com "cd bitcoinbackend/spring && nohup java -jar backend-0.0.1-SNAPSHOT.jar > out.log &"
