# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Sobre o usuário e como trabalhar

- O usuário é **iniciante em programação** e está aprendendo frontend.
- Ambiente: Windows, VS Code, PowerShell.
- **Responda sempre em português.**
- Explique de forma simples o que cada mudança faz e por quê.
- Para mudanças grandes, **mostre um plano antes de codar** e espere a aprovação.
- Quando uma etapa estiver funcionando, **lembre o usuário de fazer commit** (e push para o GitHub).

## Projeto

Site de estudo de programação e robótica ("Robótica na Escola") para alunos do 6º ao 9º ano **e** professores, com Vite + React 19 + JavaScript. O lint usa o **oxlint** (`.oxlintrc.json`). As trilhas vêm da proposta "Programação e Robótica nas Escolas de Paudalho" (Scratch, código no mundo físico, peças do kit Arduino, Arduino em blocos, robôs, LEGO Computação e IA, laboratório maker, OBR resgate e cidadania digital).

## Comandos

```powershell
npm run dev        # http://localhost:5173
npm run build
npm run lint
```

## Arquitetura

- `src/data/trilhas.js`: as 9 trilhas, em ordem. Trilha com `licoes: []` aparece como "Em breve".
- `src/data/licoes/<trilha>/`: uma lição por arquivo, juntadas no `index.js` da pasta. Formato dos blocos documentado em `src/data/licoes/pecas-arduino/index.js` (`titulo`, `texto`, `lista`, `passos`, `figura`, `dica`, `cuidado`, `professor`, `link`, `resumo`). Texto aceita `código` e **negrito** (`TextoRico.jsx`).
- Bloco `scratch` (só na trilha Scratch, e futuramente em Arduino em blocos): desenha pilhas de blocos do Scratch em HTML/CSS (`src/components/BlocosScratch.jsx`). Formato documentado em `src/data/licoes/scratch/index.js`.
- Toda lição tem um bloco `professor` (sugestões de aula), porque o público inclui os professores.
- `src/components/Bloco.jsx` desenha cada tipo de bloco. Ilustrações em SVG em `src/components/ilustracoes/`, ligadas pelo nome em `ilustracoes/index.js`.
- Rotas com `HashRouter`: `/`, `/trilha/:trilhaId`, `/trilha/:trilhaId/:licaoId`. `vite.config.js` usa `base: './'`.
- Progresso em `localStorage` (`src/progresso.js`), chave `robotica:licoes-lidas` com `"<trilha>/<lição>"`.
- Visual com a paleta da proposta (cores em variáveis no começo de `src/index.css`); fontes Rubik (títulos) + Nunito (texto).
- Publicação: `.github/workflows/publicar.yml` publica no GitHub Pages a cada push na `main`.

## Plano combinado

1. Fase 1 (feita): projeto, tela inicial, rotas e a trilha "Peças do kit Arduino" completa.
2. Fase 2 (feita): quiz no fim de cada lição (`src/components/Quiz.jsx`, campo `quiz` de cada lição, 4 perguntas). Terminar o quiz marca a lição como lida; o melhor resultado fica em `localStorage`, chave `robotica:quiz-melhor`.
3. Fase 3 em diante: as outras trilhas, uma por vez. Feitas: Scratch (7 lições, termina no minijogo "Pegue a maçã"). Pesquisar antes de escrever a do LEGO Computação e IA (produto recente).
