### Passos para 

1°) Instalar e configurar o [Docker](https://www.docker.com)
##
2°) Inicie o servidor do SonarQube executando o comando:
```yaml
docker run -d --name sonarqube -e SONAR_ES_BOOTSTRAP_CHECKS_DISABLE=true -p 9000:9000 sonarqube:latest
```
Este passo está descrito na documentação oficial do SonarQube: https://docs.sonarqube.org/latest/try-out-sonarqube/
##
3°) Com o container rodando, verifique se está tudo certo com o servidor abrindo no navegador http://localhost:9000.  
PS.: a porta deve ser a mesma definida na execução do comando do passo anterior.
##
> Agora precisamos configurar o SonarScanner, que é responsável por escanear nosso código fonte. Documentação base: https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/.

4°) Criar um arquivo na base do seu projeto com o nome e extensão: `sonar-project.properties`. Colocar dentro dele o seguinte conteúdo:
```yaml
sonar.host.url=http://localhost:9000

# must be unique in a given SonarQube instance
sonar.projectKey=crud-produtos

# --- optional properties ---

# defaults to project key
sonar.projectName=CRUD Produtos
# defaults to 'not provided'
sonar.projectVersion=1.0
 
# Path is relative to the sonar-project.properties file. Defaults to .
sonar.sources=src
 
# Encoding of the source code. Default is default system encoding
sonar.sourceEncoding=UTF-8

sonar.exclusions=**/node_modules/**

# Login
sonar.login=admin
sonar.password=admin
```
A título de informação, este conteúdo está na [documentação](https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/), só "descomentamos" as propriedades colocando _key_ e _name_. E as propriedades `sonar.host.url`, `sonar.exclusions`, `sonar.login` e `sonar.password` foram adicionadas.
##
> Agora precisamos realizar a execução. É possível fazer manualmente, mas existe um repositório que envolve o SonarScanner, facilitando esta etapa: https://docs.sonarqube.org/latest/analyzing-source-code/scanners/sonarscanner/.

5°) Para instalar:
```yaml
npm i sonar-scanner --save-dev
```
Agora basta adicionar um script no package.json para facilitar a execução:
```yaml
"sonar": "sonar-scanner"
```
##
6°) Agora podemos executar o SonarScanner:
```yaml
npm run sonar
```
##
> A partir deste momento o seu projeto deve aparecer no dashboard principal do Sonar que está rodando na sua máquina!

7°) Acesse a url principal: http://localhost:9000, e procure pelo seu projeto. No caso do código usado neste tutorial no passo 4, um card com um título "CRUD Produtos" deve aparecer.  
Identificando o projeto e clicando nele, você será direcionado para o dashboard dele. Na aba "Overall Code" é possível ver a quantidade de bugs, vulnerabilidades, security hotspots, code smells e etc de todo o scanner do seu projeto.
> Agora mãos na massa! Bora corrigir todos estes problemas encontrados no scanner. Basta fazer as atuações necessárias no código e rodar o comando de scanner novamente (passo 6).
