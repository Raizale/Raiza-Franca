# Entrega: Rolando os Dados

Para começar, acesse [este link](https://gitlab.com/kenzie-academy-brasil/se/fe/getting-started-with-javascript/s_rolling-dice), faça o fork e clone o repo.


Ao rolar dois dados de seis faces, cada dado irá mostrar um número entre 1 e 6. Quando estes números nos dois dados forem somados, o resultado será um número entre 2 e 12.

Use JavaScript para simular 1000 rolagens de um par de dados. *Você precisará descobrir como gerar números aleatórios no JavaScript, use seu Google-Fu!*

Para cada possível rolagem (de 2 a 12), conte a frequência. Você deve usar um array para registrar essas contagens.

Inicialize um array chamado *`count`* preenchendo-o com zeros. Em seguida, sempre que uma rolagem de dados resultar em, digamos, sete, adicione um ao valor do 7º elemento do array de contagem.

Por exemplo, se a variável rollOfDice contiver a rolagem atual, você pode incrementar a contagem com um código assim:

```js
count[rollOfDice] = count[rollOfDice] + 1;
```

Depois que as 1000 rolagens terminarem, mostre o resultado delas em uma página HTML.

Aqui está um exemplo do tipo de resultado que seu programa pode produzir:

```
2: 32  
3: 50  
4: 76  
5: 120  
6: 151  
7: 161  
8: 125  
9: 121  
10: 89  
11: 52  
12: 23
```

## Formato de saída

Além do resultado numérico descrito acima, mostre os resultados finais em forma de uma barra gráfica (usando um DIV para cada barra, e variando as dimensões proporcionalmente aos resultados).

## Envio

Faça o push do código para o seu repositório GitLab e implemente-o via GitLab pages. No Canvas, por favor, envie a url de seu Gitlab Pages (ex: https://nomedeusuario.gitlab.io/s_rolling-dice/) e, no GitLab, adicione o grupo `ka-br-<sua-turma>-correcoes` como membro do seu projeto com a permissão "Reporter".
