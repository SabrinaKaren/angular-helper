### Passos para fazer um primeiro gráfico utilizando angular-google-charts

1°) Instalar o pacote [angular-google-charts](https://www.npmjs.com/package/angular-google-charts)  
```yaml
npm i angular-google-charts
```  
![](https://github.com/SabrinaKaren/angular-helper/blob/master/angular-google-charts/assets/01.png)
##

2º) Importar GoogleChartsModule no app.module.ts:  
![](https://github.com/SabrinaKaren/angular-helper/blob/master/angular-google-charts/assets/02.png)
##

3º) Verificar se após a importação a aplicação está subindo:  
![](https://github.com/SabrinaKaren/angular-helper/blob/master/angular-google-charts/assets/03.png)

No browser:  
![](https://github.com/SabrinaKaren/angular-helper/blob/master/angular-google-charts/assets/04.png)
##

4º) Adicionar a tag no HTML. Trecho de exemplo:
```yaml
<google-chart #chart
  [data]="generalData"
  [columns]="generalColumns"
  [width]="generalWidth"
  [height]="generalHeight"
  [type]="pieType"
  [title]="pieTitle"
  [options]="pieOptions">
</google-chart>
```  
##

5º) Configurar os valores no javaScript/typeScript. Trecho de exemplo:
```yaml
generalData = [
  ['Sul', 18.2],
  ['Centro-Oeste', 10.7],
  ['Norte', 11.2],
  ['Nordeste', 23.5],
  ['Sudeste', 36.4]
];
generalColumns = ['Região', 'Porcentagem'];
generalWidth = 700;
generalHeight = 400;
pieType = 'PieChart';
pieTitle = '[Pizza] Casos Covid Brasil por região';
pieOptions = {};
```  
##

6º) Com pequenos ajustes no componente padrão, temos o seguinte resultado:  
![](https://github.com/SabrinaKaren/angular-helper/blob/master/angular-google-charts/assets/05.png)

> Resultado em vídeo:
![](https://github.com/SabrinaKaren/angular-helper/blob/master/angular-google-charts/assets/06_in_gif.gif)
