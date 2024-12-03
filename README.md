# Terrains Connus

Project for the hackathon "données alimentaires" on 2024 December 2nd/3rd.

"Terrains Connus" permet d'obtenir une vue d’ensemble des terres vendues, classées par typologie, et accédez rapidement aux détails spécifiques de chaque transaction, incluant son prix et sa classification.

## Frontend

```sh
cd frontend
```

### Deployment

This project is automatically deployed to [https://opendatateam.github.io/terrains-connus/](https://opendatateam.github.io/terrains-connus/) whenever changes are pushed to the `main` branch. 

You can check the status of the deployment by visiting the [GitHub Actions page](https://github.com/opendatateam/terrains-connus/actions) for this repository.


### Run locally

#### Dependencies

You need to have [Bun](https://bun.sh/) installed to be able to run the project.
To install Bun:
```sh
curl -fsSL https://bun.sh/install | bash
```

#### Project Setup

```sh
bun install
```

#### Compile and Hot-Reload for Development

```sh
bun dev
```

#### Compile for Production

```sh
bun run build
```

### Lint and format code

```sh
biome check --write src/.
```
