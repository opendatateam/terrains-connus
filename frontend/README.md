# Terrains Connus

Project for the hackathon données alimentaires.

## Deployment

This project is automatically deployed to [https://opendatateam.github.io/terrains-connus/](https://opendatateam.github.io/terrains-connus/) whenever changes are pushed to the `main` branch. 

You can check the status of the deployment by visiting the [GitHub Actions page](https://github.com/opendatateam/terrains-connus/actions) for this repository.


## Run locally

### Dependencies

You need to have [Bun](https://bun.sh/) installed to be able to run the project.
To install Bun:
```sh
curl -fsSL https://bun.sh/install | bash
```

### Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```
