## 🍰 𝐑𝐞𝐜𝐞𝐢𝐭𝐚𝐬 𝐝𝐚 𝐑𝐢𝐭𝐚

Aplicação web **mobile-first** para visualização e navegação de receitas caseiras, com foco em experiência do usuário, organização por categorias e layout moderno inspirado em apps de culinária.

---

### ♨ Preview

| Mobile                                                       | Desktop                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| <img src="src/assets/readme/Untitled design (1).png" alt="Descrição da imagem" width="620" height="auto" /> | <img src="src/assets/readme/Untitled design.png" alt="Home Desktop" width="600" height="auto" />  |


---

### ♨ Funcionalidades

* **Mobile-first** com adaptação completa para desktop
* Busca de receitas por nome
* Filtro por categorias
* Página de listagem de receitas
* Página de detalhes da receita
* Menu lateral animado com fundo desfocado
* Scroll automático para o topo ao trocar de página

---

### ♨ Estrutura de Dados

As receitas seguem o seguinte modelo:

```ts
export interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  time: string;
  category: string;
  ingredients: string[];
  steps: string[];
  rating?: string;
  serving?: string;
  level?: string;
}
```

---

### ♨ Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **React Router DOM**
* **Tailwind CSS**
* **Lucide Icons**

---

### ♨ Design & UX

* Layout inspirado em aplicativos de receitas
* Tipografia personalizada para identidade visual
* Animações suaves e interações visuais
* Navegação simples e intuitiva

---

### ♨ Estrutura de Pastas

```
src/
├── assets/
├── components/
│   ├── Header/
│   ├── Home/
│   └── Footer/
├── data/
│   └── recipes.ts
├── pages/
│   ├── Home.tsx
│   ├── Recipes.tsx
│   ├── Recipe.tsx
│   └── Admin.tsx
├── App.tsx
└── main.tsx
```

---

### ♨ Rotas da Aplicação

| Rota           | Descrição                                |
| -------------- | ---------------------------------------- |
| `/`            | Home                                     |
| `/recipes`     | Lista de receitas                        |
| `/recipes/:id` | Detalhes da receita                      |
| `/admin`       | Área administrativa (em desenvolvimento) |

---

### ♨ Próximas Melhorias

* Favoritar receitas (persistência)
* Filtro por nível e tempo de preparo
* Área administrativa funcional
* Backend / API
* Autenticação

---

### ☺ Autora

𝘔𝘢𝘳𝘪𝘢 𝘓𝘶𝘪𝘻𝘢 𝘙𝘢𝘮𝘰𝘴
| `Desenvolvedora Júnior`

* React • TypeScript • Tailwind • UX
* Projeto desenvolvido para estudo e portfólio

---

### 📄 Licença

Este projeto é apenas para fins educacionais e de portfólio.

---
