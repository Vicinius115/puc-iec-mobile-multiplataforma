# ENTREGA — Atividade 4 (PWA)


**Nome:** <Vinícius Eduardo Silva Oliveira> · **GitHub:** <Vicinius115>

---

## 1. Site comum × PWA — o que EU vi (3 diferenças)

Abra `https://pwa-tmdb-aula4.vercel.app` e compare com um site comum (ex.: themoviedb.org). Modo avião → recarregar; fechar e reabrir; instalar.

| # | Site comum | PWA | Print/evidência |
|---|---|---|---|
| 1 | Um site que depende da rede, pode não carregar, quando existe falha de conexão. | O sistema continuou exibindo a biblioteca dos filmes, mesmo estando offline. | [!aplicação-offline](/pratica/evidencias/aplicativo-offline.png) |
| 2 | Site convencional, possui necessidade de manter dados do usuário disponíveis offline. | Os favoritos continuaram disponíveis, durante o teste offline, com o indicador de quantidade selecionados. | [!favoritos-offline](/pratica/evidencias/favoritos-offline.png) |
| 3 | O acesso acontece através de um navegador. | Um PWA, pode ser instalado e acessado como um aplicativo independente, quando o dispositivo e o navegador possuem suporte. |[!app-baixado](/pratica/evidencias/app-baixado.png) |

## 2. Prova do offline no SEU build

- [OK] Print do **DevTools → Application → Cache Storage** com `tmdb-api` e `tmdb-images` (com itens)
[!Evidência-DevTools+cache+storage](/pratica/evidencias/dev-tools-offline.png)

- [OK] Print do app em **modo avião** carregando a lista
[!Evidência-Modo-offline](/pratica/evidencias/dev-tools-offline.png)

- [OK] Print do aviso **"Nova versão disponível"** (ou explique por que não conseguiu reproduzir)
[!Evidência-Nova-versão-Disponível](/pratica/evidencias/dev-tools-btn-atualizar.png)

Todos os prints de evidência podem ser encontrados na pasta **evidencias.**


## 3. Reflexão (5–8 linhas)

`autoUpdate` × `prompt`: qual você escolheria para um app de **checkout** e para um app de **notícias**, e por quê? O que pode dar errado em cada escolha?

Para um aplicativo de **checkout**, escolheria o modelo prompt, permitindo que o usuário controle a atualização e evite interrupções durante o pagamento. O risco é o usuário permanecer em uma versão desatualizada com possíveis brechas e falhas de segurança.

Já em um aplicaativo de **notícias**, optaria pela utilização do autoUpdate, o que garantiria um aplicativo sempre atualizado com melhorias e correções rápidas, mesmo com um risco maior de interromper leitura ou perder estados temporários.

## 4. Declaração de uso de IA

Usei IA? Onde e como? (uso transparente é incentivado)

Utilizei o ChatGPT como ferramenta de apoio na interpretação dos requisitos, configuração do workbox, notificação de atualizações e desenvolvimento da funcionalidade de favoritos e detecção offline. A IA também me auxiliou na resolução de erros e organização dos testes.

As implementações e validações foram registradas localmente, utilizando PowerShell, Vscode, Git, ViTest e Chrome Devtools, incluindo compilação, testes automatizados e verificações visuais.
