# FriendPlay 🚀

FriendPlay est une application web moderne et **responsive** qui permet aux utilisateurs de créer des groupes d'amis, de partager des messages et des vidéos, de liker, commenter et voir le nombre de vues. L'application est conçue pour être **facile à utiliser**, **rapide** et **sécurisée**.

---

## 🎯 Fonctionnalités principales

- Création de compte utilisateur avec email et avatar
- Authentification sécurisée (JWT)
- Création de groupes d’amis et invitations par email
- Partage de messages texte et vidéos
- Like, commentaire et suivi du nombre de vues
- Publication publique, par groupe ou entre amis
- Gestion des notifications (email)
- Connexion avec Google OAuth (optionnel)
- Stockage des médias dans Cloudinary
- Application entièrement responsive

---

## 🛠 Stack technique

| Partie | Technologie |
|--------|------------|
| Frontend | React 18 + TypeScript + Vite + Tailwind CSS |
| Backend | Node.js 22 + Express + TypeScript |
| Base de données | MongoDB (Atlas ou local) |
| Authentification | JWT + OAuth Google |
| Stockage médias | Cloudinary |
| Emails | SMTP Gmail |
| Déploiement | Frontend → Vercel, Backend → Render |

---

## 📂 Structure du projet
friendplay/
├── frontend/ # React + Vite + TypeScript
│ ├── src/
│ ├── index.html
│ └── package.json
├── backend/ # Node + Express + TypeScript
│ ├── src/
│ │ ├── config/ # DB, env, Cloudinary
│ │ ├── controllers/ # Logique métier
│ │ ├── middlewares/ # Auth, erreurs
│ │ ├── models/ # Mongoose schemas
│ │ ├── routes/ # Routes REST
│ │ ├── utils/ # Helpers (upload, email, etc.)
│ │ ├── app.ts # Config Express
│ │ └── server.ts # Point d’entrée
│ ├── tsconfig.json
│ └── package.json
└── README.md


---

## ⚙️ Installation

### Prérequis

- Node.js v22.17.1+
- npm 9+
- MongoDB local ou Atlas
- Compte Cloudinary (optionnel)
- Compte Gmail pour SMTP (optionnel)

### Étapes

#### 1️⃣ Cloner le projet

```bash
git clone https://github.com/jeromeparbey/friendplay.git
cd friendplay

