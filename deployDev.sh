#!/bin/bash
echo "version: $version"
docker rmi -f find-my-clinic-react_client
docker rmi -f 067778919165.dkr.ecr.us-east-1.amazonaws.com/legion-legal-frontend-dev:latest

$(aws ecr get-login --no-include-email --region us-east-1)
docker-compose -f docker-compose-prod.yml build
docker tag find-my-clinic-react_client:latest 067778919165.dkr.ecr.us-east-1.amazonaws.com/legion-legal-frontend-dev:latest
docker push 067778919165.dkr.ecr.us-east-1.amazonaws.com/legion-legal-frontend-dev:latest

eb use LegionLegalFrontend-dev-env
eb deploy