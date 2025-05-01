# JWT key gen instructions

ssh-keygen -t rsa -b 4096 -m PEM -f authJwt.key
openssl rsa -in authJwt.key -pubout -outform PEM -out authJwt.key.pub
